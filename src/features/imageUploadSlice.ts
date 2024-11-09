import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageUploadState {
  file: File | null;
  previewUrl: string | null;
  isUploading: boolean;
  error: string | null;
}

const initialState: ImageUploadState = {
  file: null,
  previewUrl: null,
  isUploading: false,
  error: null,
};

const imageUploadSlice = createSlice({
  name: 'imageUpload',
  initialState,
  reducers: {
    setImageFile(state, action: PayloadAction<File>) {
      state.file = action.payload;
      state.previewUrl = URL.createObjectURL(action.payload); // Generates preview URL
      state.error = null;
    },
    setUploading(state, action: PayloadAction<boolean>) {
      state.isUploading = action.payload;
    },
    setImageUploadError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    clearImage(state) {
      state.file = null;
      state.previewUrl = null;
      state.isUploading = false;
      state.error = null;
    },
  },
});

export const { setImageFile, setUploading, setImageUploadError, clearImage } = imageUploadSlice.actions;
export default imageUploadSlice.reducer;
