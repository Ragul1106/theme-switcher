import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/themes.css';

const App = () => {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <ThemeToggle />
    </div>
  );
};

export default App;
