import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  phoneNumber: string;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  phoneNumber: "",
  isAuthenticated: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
    setAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    }
  }
});

export const { setPhoneNumber, setAuthenticated } = userSlice.actions;
export default userSlice.reducer;
