import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMe } from "../../../api/user";
import { User } from "./user.types";

export const getMeThunk = createAsyncThunk<User>("/user/me", async () => {
  const { data } = await getMe();

  return data;
});
