import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { rootReducer } from "..";

export type AppState = ReturnType<typeof rootReducer>;

export type AppThunkDispatch = ThunkDispatch<AppState, unknown, AnyAction>;
