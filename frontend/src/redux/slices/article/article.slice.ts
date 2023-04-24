import { createSlice } from "@reduxjs/toolkit";
import { getArticleByIdThunk, getArticlesThunk } from "./article.thunks";
import { ArticleState } from "./article.types";

const initialState: ArticleState = {
  articles: [],
  activeArticle: null,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticlesThunk.fulfilled, (state, { payload }) => {
      state.articles = payload;
    });
    builder.addCase(getArticleByIdThunk.fulfilled, (state, { payload }) => {
      state.activeArticle = payload;
    });
  },
});

export default articleSlice.reducer;
