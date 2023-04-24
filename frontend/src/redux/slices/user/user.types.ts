import { ObjectValuesType } from "../../../common/types";
import { userRole } from "./user.constants";

export type UserState = {
  token: string;
  user: { isLoading: boolean; user: User | null };
};

export type UserRole = ObjectValuesType<typeof userRole>;

export type User = {
  roles: UserRole[];
  info: {
    name: string;
    email: string;
    user_id: string;
  };
};
