export interface IDummyJson {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  hair: IHair;
  address: IAddress;
  company: { department: string };
}

export interface IHair {
  color: string;
  type: string;
}

export interface IAddress {
  postalCode: string;
}

export interface DepartmentGroupBy {
  ageRange: string;
  hair: Record<string, number>;
  addressUser: Record<string, string>;
  [key: string]:
    | string
    | number
    | Record<string, number>
    | Record<string, string>;
}
