import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Auth/auth.reducer';

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;