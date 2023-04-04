import { IUser } from "./User";

export type IConversation = {
  user: IUser;
  lastMessage: string;
  lastMessageAt: string;
  unreadMessages: number;
};
