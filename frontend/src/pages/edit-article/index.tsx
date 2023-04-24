import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/input";
import { selectArticleReducer } from "../../redux";
import { useAppDispatch } from "../../redux/hooks";
import {
  getArticleByIdThunk,
  getArticlesThunk,
  updateArticleThunk,
} from "../../redux/slices/article/article.thunks";
import { EditArticleForm } from "./types";
import { editArticleValidationSchema } from "./validation";

const EditArticle = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { articleId } = useParams();
  const { activeArticle } = useSelector(selectArticleReducer);
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<EditArticleForm>({
    defaultValues: {
      text: "",
    },
    resolver: yupResolver(editArticleValidationSchema),
  });

  useEffect(() => {
    dispatch(getArticleByIdThunk(articleId as string));
  }, [articleId]);

  useEffect(() => {
    reset({ text: activeArticle?.text ?? "" });
  }, [activeArticle]);

  const handleEditArticle = async (article: EditArticleForm) => {
    await dispatch(
      updateArticleThunk({ id: articleId as string, data: article })
    );
    await dispatch(getArticlesThunk());
    navigate("/");
  };

  return (
    <div>
      <h1>Edit article</h1>
      Id: {activeArticle?.id}
      <br />
      <br />
      Text: <Input name="text" register={register} />
      <br />
      <br />
      <button
        disabled={isSubmitting || !isValid}
        onClick={handleSubmit(handleEditArticle)}
      >
        Save
      </button>
    </div>
  );
};

export default EditArticle;
