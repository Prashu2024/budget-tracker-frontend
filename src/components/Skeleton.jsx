// Base skeleton component
export function Skeleton({ className = '', ...props }) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      {...props}
    />
  );
}

// Card skeleton for stats
export function StatCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Skeleton className="h-4 w-24 mb-3" />
          <Skeleton className="h-8 w-32" />
        </div>
        <Skeleton className="w-12 h-12 rounded-lg" />
      </div>
    </div>
  );
}

// Chart skeleton
export function ChartSkeleton({ height = "h-64" }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <Skeleton className="h-6 w-48 mb-4" />
      <Skeleton className={`w-full ${height}`} />
    </div>
  );
}

// Budget card skeleton
export function BudgetCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-5 w-24" />
      </div>
      <Skeleton className="w-full h-4 rounded-full mb-2" />
      <div className="flex justify-between">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  );
}

// Table skeleton
export function TableSkeleton({ rows = 5, columns = 6 }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
        <div className="flex gap-4">
          {Array.from({ length: columns }).map((_, i) => (
            <Skeleton key={i} className="h-4 flex-1" />
          ))}
        </div>
      </div>
      {/* Rows */}
      <div className="divide-y divide-gray-200">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="px-6 py-4">
            <div className="flex gap-4 items-center">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <Skeleton 
                  key={colIndex} 
                  className={`h-4 flex-1 ${colIndex === columns - 1 ? 'w-20' : ''}`} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Category card skeleton
export function CategoryCardSkeleton({ count = 3 }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-200">
        <Skeleton className="h-6 w-48" />
      </div>
      <div className="p-6 space-y-3">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-lg" />
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <div className="flex gap-2">
              <Skeleton className="w-8 h-8 rounded-lg" />
              <Skeleton className="w-8 h-8 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Budget list item skeleton
export function BudgetListSkeleton({ rows = 3 }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <Skeleton className="h-6 w-32" />
      </div>
      <div className="divide-y divide-gray-200">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="px-6 py-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-32" />
              <div className="flex gap-2">
                <Skeleton className="w-8 h-8 rounded" />
                <Skeleton className="w-8 h-8 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Large budget card skeleton
export function LargeBudgetCardSkeleton() {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <Skeleton className="h-8 w-48 mb-2 bg-white/20" />
          <Skeleton className="h-4 w-32 bg-white/20" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="w-10 h-10 rounded-lg bg-white/20" />
          <Skeleton className="w-10 h-10 rounded-lg bg-white/20" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <Skeleton className="h-3 w-20 mb-2 bg-white/20" />
            <Skeleton className="h-8 w-32 bg-white/30" />
          </div>
        ))}
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <Skeleton className="h-4 w-24 bg-white/20" />
          <Skeleton className="h-4 w-16 bg-white/20" />
        </div>
        <Skeleton className="w-full h-4 rounded-full bg-white/20" />
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
        <div className="flex items-start gap-3">
          <Skeleton className="w-5 h-5 rounded bg-white/20" />
          <div className="flex-1">
            <Skeleton className="h-4 w-32 mb-2 bg-white/20" />
            <Skeleton className="h-3 w-full bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
}