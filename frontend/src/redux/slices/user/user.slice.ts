import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getMeThunk } from "./user.thunks";
import { UserState } from "./user.types";

const initialState: UserState = {
  token: "",
  user: { isLoading: false, user: null },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMeThunk.pending, (state) => {
      state.user.isLoading = true;
    });
    builder.addCase(getMeThunk.fulfilled, (state, { payload }) => {
      state.user.isLoading = false;
      state.user.user = payload;
    });
  },
});

export const { setToken } = userSlice.actions;

export default userSlice.reducer;
