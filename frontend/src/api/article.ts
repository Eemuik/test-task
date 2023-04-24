import api from ".";
import { Article } from "../redux/slices/article/article.types";

export const getArticles = () => {
  return api.get("/article");
};

export const createArticle = (data: Article) => {
  return api.post("/article", data);
};

export const deleteArticle = (id: string) => {
  return api.delete(`/article/${id}`);
};

export const getArticleById = (id: string) => {
  return api.get(`/article/${id}`);
};

export const updateArticle = (id: string, data: Partial<Article>) => {
  return api.patch(`/article/${id}`, data);
};
