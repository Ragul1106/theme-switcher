import React, { useEffect, useState } from 'react';
import 'animate.css';
import { FaMoon } from 'react-icons/fa';
import { GiSun } from 'react-icons/gi';
import { WiMoonAltFirstQuarter } from 'react-icons/wi';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="d-flex flex-column align-items-center animate__animated animate__fadeInDown">
      <h2 className="mb-4 d-flex align-items-center gap-2">
        <WiMoonAltFirstQuarter /> Theme Switcher
      </h2>

      <button
        className="btn btn-lg fw-bold d-flex align-items-center gap-2 animate__animated animate__pulse animate__infinite"
        style={{
          backgroundColor: 'var(--btn-bg)',
          color: 'var(--btn-color)',
          transition: 'all 0.3s ease',
        }}
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <>
            <FaMoon /> Switch to Dark Mode
          </>
        ) : (
          <>
            <GiSun /> Switch to Light Mode
          </>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
