import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function BarChart({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const margin = { top: 20, right: 30, bottom: 60, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3
      .select(svgRef.current)
      .attr('width', '100%')
      .attr('height', height + margin.top + margin.bottom)
      .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X scale
    const x0 = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .rangeRound([0, width])
      .paddingInner(0.1);

    const x1 = d3
      .scaleBand()
      .domain(['income', 'expenses'])
      .rangeRound([0, x0.bandwidth()])
      .padding(0.05);

    // Y scale
    const maxValue = d3.max(data, (d) => Math.max(d.income, d.expenses));
    const y = d3
      .scaleLinear()
      .domain([0, maxValue * 1.1])
      .nice()
      .rangeRound([height, 0]);

    // Color scale
    const color = d3.scaleOrdinal().domain(['income', 'expenses']).range(['#10b981', '#ef4444']);

    // Add legend at top center (horizontal)
    const legendData = ['income', 'expenses'];
    const itemSpacing = 120; // horizontal spacing between legend items (adjust if needed)
    const totalLegendWidth = legendData.length * itemSpacing;

    const legend = svg
      .append('g')
      .attr('class', 'legend')
      // center the whole legend group horizontally; negative y to place it above the bars area
      .attr('transform', `translate(${width / 2 - totalLegendWidth / 2}, ${-margin.top / 2})`);

    const legendItems = legend
      .selectAll('g')
      .data(legendData)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${i * itemSpacing}, 0)`);

    // Draw legend colored squares
    legendItems
      .append('rect')
      .attr('width', 16)
      .attr('height', 16)
      .attr('rx', 3)
      .attr('y', -8) // vertically center relative to text baseline
      .attr('fill', (d) => color(d));

    // Add legend text
    legendItems
      .append('text')
      .attr('x', 22)
      .attr('y', 0)
      .attr('dy', '.35em')
      .style('font-size', '12px')
      .style('fill', '#374151')
      .text((d) => d.charAt(0).toUpperCase() + d.slice(1));



    // Add X axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x0))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .style('font-size', '11px');

    // Add Y axis
    svg
      .append('g')
      .call(
        d3.axisLeft(y).tickFormat((d) =>
          d >= 1000 ? `₹${(d / 1000).toFixed(0)}k` : `₹${d}`
        )
      )
      .style('font-size', '11px');

    // Add Y axis label
    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - margin.left)
      .attr('x', 0 - height / 2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', '12px')
      .style('fill', '#6b7280')
      .text('Amount (₹)');

    // Add bars
    const barGroups = svg
      .selectAll('g.bar-group')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'bar-group')
      .attr('transform', (d) => `translate(${x0(d.month)},0)`);

    ['income', 'expenses'].forEach((key) => {
      barGroups
        .append('rect')
        .attr('x', x1(key))
        .attr('y', height)
        .attr('width', x1.bandwidth())
        .attr('height', 0)
        .attr('fill', color(key))
        .attr('rx', 3)
        .style('cursor', 'pointer')
        .on('mouseenter', function (event, d) {
          d3.select(this).attr('opacity', 0.8);
          
          // Show tooltip
          const tooltip = d3.select('body').append('div')
            .attr('class', 'tooltip')
            .style('position', 'absolute')
            .style('background', 'rgba(0, 0, 0, 0.8)')
            .style('color', 'white')
            .style('padding', '8px 12px')
            .style('border-radius', '6px')
            .style('font-size', '12px')
            .style('pointer-events', 'none')
            .style('z-index', '1000')
            .html(`${key === 'income' ? 'Income' : 'Expenses'}: ₹${d[key].toFixed(2)}`)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 10) + 'px');
        })
        .on('mouseleave', function () {
          d3.select(this).attr('opacity', 1);
          d3.selectAll('.tooltip').remove();
        })
        .transition()
        .duration(800)
        .attr('y', (d) => y(d[key]))
        .attr('height', (d) => height - y(d[key]));
    });

    // Add legend
    // const legend = svg
    //   .selectAll('.legend')
    //   .data(['income', 'expenses'])
    //   .enter()
    //   .append('g')
    //   .attr('class', 'legend')
    //   .attr('transform', (d, i) => `translate(${width - 100}, ${i * 25})`);

    // legend
    //   .append('rect')
    //   .attr('width', 18)
    //   .attr('height', 18)
    //   .attr('fill', color)
    //   .attr('rx', 3);

    // legend
    //   .append('text')
    //   .attr('x', 24)
    //   .attr('y', 9)
    //   .attr('dy', '.35em')
    //   .style('font-size', '12px')
    //   .style('fill', '#374151')
    //   .text((d) => d.charAt(0).toUpperCase() + d.slice(1));

  }, [data]);

  return <svg ref={svgRef}></svg>;
}

export default BarChart;