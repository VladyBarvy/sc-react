import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from "../src/features/weatherSlice.js";
import themeReducer from '../src/features/themeSlice.js';


export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    theme: themeReducer,
  },
});
