# Waste Management Application

## 1. Tools Used

- **React** with TypeScript for building the UI components.
- **React Router v6** for client-side routing.
- **Redux Toolkit (RTK)** for global state management.
- **RTK Query** for data fetching and caching from the backend API.
- **Tailwind CSS** for styling and responsive design.
- **Heroicons** for SVG icons.

## 2. Architecture and Functionality

The application is designed with a clear separation of concerns between pages, components, state management, and API communication:

- **Pages**: These are route-level components (e.g., `SkipSelection`, `AboutUs`) responsible for fetching data from the API using RTK Query hooks, managing global state via Redux, and orchestrating the application flow. Pages act as **smart containers**.

- **Components**: Presentational UI elements (e.g., `SkipList`, `Toolbar`) that receive props from pages and manage only **local state** if needed (like UI toggles or selected items). Components are **dumb/presentational** and reusable.

- **Store (Redux Toolkit)**: 
  - Contains slices defining global state pieces and reducers.
  - Integrates **RTK Query** slices for API endpoints, providing hooks for data fetching and caching.
  - Middleware from RTK Query is included to handle async requests and cache lifecycle.

- **API Communication**: Done through RTK Query endpoints defined in the `skipsApi` slice. This abstracts the fetching logic and provides auto-generated React hooks (`useGetSkipsByLocationQuery`) to be used in pages.

- **Routing and Layout**:
  - The app uses a Layout component containing the header and navigation tabs.
  - Routes are defined with `react-router-dom`'s `createBrowserRouter`.
  - An ErrorBoundary component handles unexpected errors on route navigation.

- **Responsive UI**:
  - Uses Tailwind CSS utilities.
  - A hamburger menu appears on small screens opening a sidebar with navigation and login button.

## ▶️ How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/Lirimi/Waste-management.git
cd Waste-management
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

```bash
npm run start
```
