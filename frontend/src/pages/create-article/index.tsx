import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input";
import { useAppDispatch } from "../../redux/hooks";
import {
  createArticleThunk,
  getArticlesThunk,
} from "../../redux/slices/article/article.thunks";
import { CreateArticleForm } from "./types";
import { createArticleValidationSchema } from "./validation";

const CreateArticle = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<CreateArticleForm>({
    defaultValues: { id: "", text: "" },
    resolver: yupResolver(createArticleValidationSchema),
  });

  const handleCreateArticle = async (article: CreateArticleForm) => {
    await dispatch(createArticleThunk(article));
    await dispatch(getArticlesThunk());
    navigate("/");
  };

  return (
    <div>
      <h1>Create article</h1>
      Id: <Input name="id" register={register} />
      <br />
      <br />
      Text: <Input name="text" register={register} />
      <br />
      <br />
      <button
        disabled={isSubmitting || !isValid}
        onClick={handleSubmit(handleCreateArticle)}
      >
        Create
      </button>
    </div>
  );
};

export default CreateArticle;
