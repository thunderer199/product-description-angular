export interface IUser {
  id?: number;
  username?: string;
  password?: string;
  confirmPass?: string; // for register
}

export interface ILoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}
