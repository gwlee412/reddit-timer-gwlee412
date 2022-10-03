import React from 'react';
import './styles.css';
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import HomePage from './HomePage';
import SearchPage from './SearchPage';

const Paths = () => {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/search', element: <SearchPage /> },
  ]);
  return routes;
};

function App() {
  return (
    <div>
      <Router>
        <HomePage />
        <Paths />
      </Router>
    </div>
  );
}

export default App;
