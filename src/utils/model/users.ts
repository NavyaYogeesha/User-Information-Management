/*
 *  09.02.2023
 *  Model or interface file related to User data available
 */

export interface IUsers {
  users: IUser[];
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  profilepicture: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface IGeo {
  lat: string;
  lng: string;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
