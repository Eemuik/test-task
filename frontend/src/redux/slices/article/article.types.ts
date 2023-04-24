export type Article = {
  id: string;
  text: string;
};

export type ArticleState = {
  articles: Article[];
  activeArticle: Article | null;
};
