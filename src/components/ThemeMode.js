import React, { useState, useEffect } from 'react';

export default function ThemeMode() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('DARK_MODE'))) {
      setTheme(true);
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }, [theme]);
  return (
    <>
      <div className="theme">
        <button
          type="button"
          onClick={() => {
            localStorage.setItem('DARK_MODE', !theme);
            setTheme((prev) => !prev);
          }}
        >
          {theme ? '🌚' : '🌞'}
        </button>
      </div>
    </>
  );
}
