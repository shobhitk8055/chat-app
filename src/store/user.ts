import create from "zustand";
import { IUser } from "../types/User";
import people from "../assets/people.json";

type UserStore = {
  loggedInUser: IUser;
  currentReceiver: IUser | null;
  setCurrentReceiver: (user: IUser) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  loggedInUser: people[0],
  currentReceiver: null,
  setCurrentReceiver: (user) => set(() => ({ currentReceiver: user })),
}));
