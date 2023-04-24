import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArticleItem from "../../components/article-item";
import { useUser } from "../../hooks/use-user";
import { selectArticleReducer } from "../../redux";
import { useAppDispatch } from "../../redux/hooks";
import { getArticlesThunk } from "../../redux/slices/article/article.thunks";
import { ArticlesWrapper } from "./styled";

const Home = () => {
  const { logout } = useAuth0();
  const { articles } = useSelector(selectArticleReducer);
  const { isAdmin } = useUser();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticlesThunk());
  }, []);

  const handleCreate = () => navigate("/create-article");
  const handleLogout = () => {
    logout({ logoutParams: { returnTo: location.origin + "/login" } });
  };

  return (
    <ArticlesWrapper>
      {isAdmin && <button onClick={handleCreate}>Create article</button>}
      <button onClick={handleLogout}>Logout</button>
      {articles.map((item) => (
        <ArticleItem {...item} />
      ))}
    </ArticlesWrapper>
  );
};

export default Home;
