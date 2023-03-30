import { IUser } from "./User";

export type IMessage = {
  sender: IUser;
  receiver: IUser;
  time: string;
  text: string;
};
