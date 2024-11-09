import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OTPState {
  otp: string;
  isVerified: boolean;
  error: string | null;
}

const initialState: OTPState = {
  otp: '',
  isVerified: false,
  error: null,
};

const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setOTP(state, action: PayloadAction<string>) {
      state.otp = action.payload;
    },
    verifyOTP(state, action: PayloadAction<boolean>) {
      state.isVerified = action.payload;
      state.error = action.payload ? null : 'OTP verification failed';
    },
    setOTPError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setOTP, verifyOTP, setOTPError } = otpSlice.actions;
export default otpSlice.reducer;
