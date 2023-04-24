import { useSelector } from "react-redux";
import { selectUserReducer } from "../redux";

export const useUser = () => {
  const {
    user: { user },
  } = useSelector(selectUserReducer);

  return {
    isAdmin: !!user?.roles.includes("admin"),
  };
};
