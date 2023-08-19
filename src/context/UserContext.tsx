import React, { createContext, useEffect, useState } from "react";
import { ContextValues, User } from "../types";

type Props = {
  children: React.ReactNode;
};

export const UserContextState = createContext<ContextValues>({
  user: undefined,
  loginHandler: () => {},
  logOutHandler: () => {},
});

export default function UserContext({ children }: Props) {
  const [user, setUser] = useState<User | undefined>(undefined);
  function loginHandler(payload: User) {
    setUser(payload);
    window.localStorage.setItem("userInfo", JSON.stringify(payload));
  }
  function logOutHandler() {
    setUser(undefined);
    window.localStorage.removeItem("userInfo");
  }
  const values: ContextValues = {
    user,
    loginHandler,
    logOutHandler,
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = window.localStorage.getItem("userInfo");
      const user: User = item ? JSON.parse(item) : undefined;
      setUser(user);
    } else {
      return undefined;
    }
  }, []);
  return (
    <UserContextState.Provider value={values}>
      {children}
    </UserContextState.Provider>
  );
}
