import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import drumpadReducer from '../features/drumpad/drumpadSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    drumpad: drumpadReducer
  },
});
