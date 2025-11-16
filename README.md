# Budget Tracker - Frontend

A modern, responsive React application for personal budget tracking with interactive D3.js visualizations.

## Live Demo

**Frontend Deployment Link:** https://budget-tracker-frontend-nu.vercel.app  

**Backend API:** https://budgettrackerbackend-production-53a7.up.railway.app/api

**Frontend Repository:** https://github.com/Prashu2024/budget-tracker-frontend

## Test Credentials

```
Username: test
Password: test123
```

## Features

### Core Functionality
- **Authentication:** Token-based login system
- **Dashboard:** Financial summary with D3.js charts
  - Total income, expenses, and balance cards
  - Pie charts for income/expense by category
  - Bar chart showing 6-month trend
  - Monthly budget progress tracking
- **Transaction Management:** 
  - Add, edit, and delete transactions
  - Advanced filtering (date, category, amount, type)
  - Pagination (10 items per page)
- **Category Management:** 
  - Create custom income/expense categories
  - Edit and delete categories
- **Budget Management:** 
  - Set monthly budgets
  - Budget vs expenses comparison (D3.js chart)
  - Visual progress indicators with alerts

### UI/UX
- Modern, responsive design with Tailwind CSS
- Skeleton loaders for better perceived performance
- Smooth animations and transitions
- Mobile-friendly interface
- Logout confirmation modal

## Tech Stack

- **React 18.2** - UI library
- **React Router 6.20** - Client-side routing
- **Axios 1.6.2** - HTTP client
- **D3.js 7.8.5** - Data visualizations
- **Tailwind CSS** - Styling
- **Vite 5.0** - Build tool
- **Lucide React** - Icons

## Installation

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup

```bash
# Clone repository
git clone https://github.com/Prashu2024/budget-tracker-frontend.git
cd budget-tracker-frontend

# Install dependencies
npm install

# Create environment file
echo "VITE_API_URL=https://budgettrackerbackend-production-53a7.up.railway.app/api" > .env

# For local backend
# echo "VITE_API_URL=http://localhost:8000/api" > .env

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Project Structure

```
src/
├── api/
│   └── axios.js          # API configuration
├── components/
│   ├── charts/           # D3.js chart components
│   ├── Layout.jsx        # Main layout
│   ├── TransactionModal.jsx
│   ├── CategoryModal.jsx
│   ├── BudgetModal.jsx
│   └── LogoutConfirmModal.jsx
├── pages/
│   ├── Login.jsx         # Authentication page
│   ├── Dashboard.jsx     # Financial summary
│   ├── Transactions.jsx  # Transaction management
│   ├── Categories.jsx    # Category management
│   └── Budget.jsx        # Budget management
├── App.jsx               # Main app component
└── main.jsx              # Entry point
```

##  D3.js Visualizations

### Dashboard Charts
1. **Pie Charts** - Income and expense breakdown by category
2. **Bar Chart** - 6-month income vs expense trend
3. **Budget Comparison Chart** - Budget vs actual expenses

All charts are interactive with hover effects and responsive design.

## Environment Variables

```env
VITE_API_URL=<backend-api-url>
```

## Features Documentation

### Authentication
- Token-based authentication
- Automatic token refresh
- Protected routes

### Transaction Filtering
- Filter by type (income/expense)
- Filter by category
- Filter by date range (start/end date)
- Filter by amount range (min/max)
- Search in descriptions

## Acknowledgments

This project was developed with assistance from:
- **Claude (Anthropic)** - AI assistant for architecture design, code generation, component development, and problem-solving
- **ChatGPT (OpenAI)** - AI assistant for debugging, optimization suggestions, and documentation

All code has been reviewed, tested, and fully understood by the developer.

### External Libraries
- React, React Router, Axios, D3.js, Tailwind CSS, Vite, Lucide React (all MIT/ISC licensed)


##  Developer

**Prashu2024**  
GitHub: [@Prashu2024](https://github.com/Prashu2024)

---

