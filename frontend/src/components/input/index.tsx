import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ name, register }) => {
  return <input {...register(name)} />;
};

export default Input;
