import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  businessName: string;
  country: string;
  state: string;
  city: string;
  address: string;
  email: string;
  mobile: string;
  openingTime: string;
  closingTime: string;
  profilePicture?: string; // Allow string for URL or undefined
  panNumber?: string;
  aadharNumber?: string;
  bankAccount?: string;
  ifscCode?: string;
  serviceInfo?: string;
}

const initialState: UserState = {
  businessName: '',
  country: '',
  state: '',
  city: '',
  address: '',
  email: '',
  mobile: '',
  openingTime: '',
  closingTime: '',
  profilePicture: undefined,
  panNumber: '',
  aadharNumber: '',
  bankAccount: '',
  ifscCode: '',
  serviceInfo: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<Partial<UserState>>) {
      Object.assign(state, action.payload); // Allows bulk updating
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
