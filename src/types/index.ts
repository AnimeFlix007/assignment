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

export interface JP_User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
