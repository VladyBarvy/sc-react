import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themeSlice.js';
import '../assets/mainMenu.css';

const MainMenu = () => {
  const theme = useSelector((state) => state.theme.theme); // Получаем текущую тему
  const dispatch = useDispatch(); // Получаем функцию dispatch

  const handleToggleTheme = () => {
    dispatch(toggleTheme()); // Диспатчим действие для переключения темы
  };

  return (
    <div className={`menu ${theme}`}>
      <h1>Главное меню</h1>
      <div className="theme-switcher">
        <label>
          Тема:
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={handleToggleTheme}
          />
          {theme === 'light' ? ' Светлая' : ' Тёмная'}
        </label>
      </div>
      <div className="button-grid">
        {[1, 2, 3, 4, 5, 6].map((number) => (
          <button key={number} className="menu-button">
            Кнопка {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
