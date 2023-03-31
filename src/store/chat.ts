import create from "zustand";
import { IMessage } from "../types/Message";
import { IUser } from "../types/User";
import people from "../assets/people.json";

type ChatStore = {
  loggedInUser: IUser;
  conversations: IMessage[];
  setAllConversations: (messages: IMessage[]) => void;
  pushMessage: (message: IMessage) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  loggedInUser: people[0],
  conversations: [],
  setAllConversations: (messages) =>
    set(() => ({ conversations: messages })),
  pushMessage: (message) =>
    set((state) => ({
      conversations: [...state.conversations, message],
    })),
}));
