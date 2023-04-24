import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppState, AppThunkDispatch } from "../types";

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
