import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setToken } from "../../redux/slices/user/user.slice";
import { getMeThunk } from "../../redux/slices/user/user.thunks";

const Login = () => {
  const { user, getAccessTokenSilently, loginWithPopup } = useAuth0();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const setup = async () => {
      if (user) {
        const token = await getAccessTokenSilently();

        dispatch(setToken(token));
        dispatch(getMeThunk());
        navigate("/");
      }
    };

    setup();
  }, [user]);

  const handleLogin = () => {
    loginWithPopup({ authorizationParams: { redirect_uri: location.origin } });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
