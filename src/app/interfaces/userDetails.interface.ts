import {IUser} from "./user.interface";
import {IUserAddress} from "./userAddress.interface";

export interface IUserDetails extends IUser {
  username: string;
  email: string;
  phone: string;
  website: string;
  address: IUserAddress;
}
