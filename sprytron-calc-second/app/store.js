import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from "../src/features/weatherSlice.js";
//import themeReducer from "../features/theme/themeSlice.js"; // Импортируем срез темы


export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    // theme: themeReducer, // Добавляем срез темы
  },
});
