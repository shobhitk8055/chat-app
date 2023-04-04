import create from "zustand";
import { IMessage } from "../types/Message";

type MessageStore = {
  messages: IMessage[];
  setAllMessages: (messages: IMessage[]) => void;
  pushMessage: (message: IMessage) => void;
  currentMessages: IMessage[];
  setAllCurrentMessages: (messages: IMessage[]) => void;
  pushToCurrentChat: (message: IMessage) => void;
};

export const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  setAllMessages: (messages) => set(() => ({ messages: messages })),
  pushMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
  currentMessages: [],
  setAllCurrentMessages: (messages) =>
    set(() => ({ currentMessages: messages })),
  pushToCurrentChat: (message) =>
    set((state) => ({
      currentMessages: [...state.currentMessages, message],
    })),
}));
