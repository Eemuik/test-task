import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserReducer } from "../../redux";
import { useAppDispatch } from "../../redux/hooks";
import { setToken } from "../../redux/slices/user/user.slice";
import { getMeThunk } from "../../redux/slices/user/user.thunks";
import { ProtectedRouteProps } from "./types";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  roles = [],
}) => {
  const {
    isLoading: isAuth0Loading,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
  const dispatch = useAppDispatch();
  const {
    user: { isLoading, user },
  } = useSelector(selectUserReducer);
  const isAuthorized = roles.every((item) => user?.roles.includes(item));

  useEffect(() => {
    const setup = async () => {
      if (!isLoading && !user) {
        const token = await getAccessTokenSilently();

        dispatch(setToken(token));
        dispatch(getMeThunk());
      }
    };

    setup();
  }, [user, isLoading]);

  if (isAuth0Loading || isLoading) return <h1>Loading...</h1>;

  if (!isAuthenticated) return <Navigate to={"/login"} replace />;
  if (!isAuthorized) return <Navigate to={"/"} replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
