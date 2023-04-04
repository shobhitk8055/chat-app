import create from "zustand";
import { IConversation } from "../types/Conversation";

type ConversationStore = {
  conversations: IConversation[];
  setAllConversation: (conversations: IConversation[]) => void;
  pushConversation: (conversations: IConversation) => void;
  updateConversation: (userId: string, message: string, time: string) => void;
};

export const useConversationStore = create<ConversationStore>((set) => ({
  conversations: [],
  setAllConversation: (conversations) =>
    set(() => ({ conversations: conversations })),
  pushConversation: (conversation) =>
    set((state) => ({
      conversations: [...state.conversations, conversation],
    })),
  updateConversation: (userId, message, time) =>
    set((state) => {
      const conversationList = [...state.conversations];
      let findConversation = conversationList.find((i) => i.user.id === userId);
      if(findConversation){
        findConversation.lastMessage = message;
        findConversation.lastMessageAt = time;
      }
      return {
        conversations: conversationList,
      };
    }),
}));
