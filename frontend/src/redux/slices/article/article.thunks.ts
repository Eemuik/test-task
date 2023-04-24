import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createArticle,
  deleteArticle,
  getArticleById,
  getArticles,
  updateArticle,
} from "../../../api/article";
import { Article } from "./article.types";

export const getArticlesThunk = createAsyncThunk<Article[]>(
  "/articles/all",
  async () => {
    const { data } = await getArticles();

    return data;
  }
);

export const createArticleThunk = createAsyncThunk<void, Article>(
  "/articles/create",
  async (article) => {
    await createArticle(article);
  }
);

export const deleteArticleThunk = createAsyncThunk<void, string>(
  "/articles/delete",
  async (id) => {
    await deleteArticle(id);
  }
);

export const getArticleByIdThunk = createAsyncThunk<Article, string>(
  "article/get-by-id",
  async (id) => {
    const { data } = await getArticleById(id);

    return data;
  }
);

export const updateArticleThunk = createAsyncThunk<
  void,
  { id: string; data: Partial<Article> }
>("article/update", async ({ id, data }) => {
  await updateArticle(id, data);
});
