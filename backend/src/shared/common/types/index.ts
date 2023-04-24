import { userRole } from '../constants';

export type ObjectValuesType<T extends object> = T[keyof T];
export type AuthenticationCookiesType = {
  refreshToken: string;
  accessToken: string;
};

export type UserRole = ObjectValuesType<typeof userRole>;
