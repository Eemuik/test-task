import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/use-user";
import { useAppDispatch } from "../../redux/hooks";
import {
  deleteArticleThunk,
  getArticlesThunk,
} from "../../redux/slices/article/article.thunks";
import { StyledArticleItem } from "./styled";
import { ArticleItemProps } from "./types";

const ArticleItem: React.FC<ArticleItemProps> = ({ id }) => {
  const { isAdmin } = useUser();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleDelete = async (id: string) => {
    const isDeletionConfirmed = confirm(
      `Are you sure you want to delete article ${id}?`
    );

    if (isDeletionConfirmed) {
      await dispatch(deleteArticleThunk(id));
      dispatch(getArticlesThunk());
    }
  };
  const handleEdit = (id: string) => navigate(`${id}/edit`);
  const handleViewMore = (id: string) => navigate(`${id}/view`);

  return (
    <StyledArticleItem>
      {id}
      <div>
        {isAdmin && (
          <>
            <button onClick={() => handleEdit(id)}>edit</button>
            <button onClick={() => handleDelete(id)}>delete</button>
          </>
        )}
        <button onClick={() => handleViewMore(id)}>view more</button>
      </div>
    </StyledArticleItem>
  );
};

export default ArticleItem;
