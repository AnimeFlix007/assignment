export interface User {
  name: string;
  phoneNo: number;
  email: string;
}

export interface ContextValues {
  user: User | undefined;
  loginHandler: (payload: User) => void;
  logOutHandler: () => void;
}
