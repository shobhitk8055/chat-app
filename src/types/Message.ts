import { IUser } from "./User";

export type IMessage = {
  sender: IUser;
  receiver: IUser;
  time: Date;
  text: string;
};
