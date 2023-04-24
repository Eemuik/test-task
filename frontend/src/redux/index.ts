import { combineReducers, configureStore } from "@reduxjs/toolkit";

import articleReducer from "./slices/article/article.slice";
import userReducer from "./slices/user/user.slice";
import { AppState } from "./types";

export const rootReducer = combineReducers({ userReducer, articleReducer });

export const store = configureStore({
  reducer: rootReducer,
});

export const selectUserReducer = (state: AppState) => state.userReducer;
export const selectArticleReducer = (state: AppState) => state.articleReducer;

export default store;
