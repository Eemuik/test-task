import api from ".";

export const getMe = () => {
  return api.get("/user/me");
};
