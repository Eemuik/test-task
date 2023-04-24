import { UserRole } from "../../redux/slices/user/user.types";

export type ProtectedRouteProps = {
  children: React.ReactNode;
  roles?: UserRole[];
};
