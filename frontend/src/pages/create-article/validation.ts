import * as yup from "yup";

export const createArticleValidationSchema = yup.object().shape({
  id: yup.string().min(1),
  text: yup.string().min(1),
});
