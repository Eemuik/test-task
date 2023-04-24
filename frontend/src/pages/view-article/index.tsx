import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectArticleReducer } from "../../redux";
import { useAppDispatch } from "../../redux/hooks";
import { getArticleByIdThunk } from "../../redux/slices/article/article.thunks";

const ViewArticle = () => {
  const { articleId } = useParams();
  const dispatch = useAppDispatch();
  const { activeArticle } = useSelector(selectArticleReducer);

  useEffect(() => {
    if (articleId) dispatch(getArticleByIdThunk(articleId));
  }, [articleId]);

  return (
    <div>
      {activeArticle?.id}

      <h3>{activeArticle?.text}</h3>
    </div>
  );
};

export default ViewArticle;
