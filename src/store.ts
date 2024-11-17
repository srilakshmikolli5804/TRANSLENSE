import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import imageUploadReducer from './features/imageUploadSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    imageUpload: imageUploadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
