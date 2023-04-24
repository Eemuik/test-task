import * as yup from "yup";

export const editArticleValidationSchema = yup.object().shape({
  text: yup.string().min(1),
});
