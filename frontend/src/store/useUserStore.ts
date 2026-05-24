import { create } from "zustand";
import { persist } from "zustand/middleware";

type Role = "user" | "moderator" | "admin";

interface User {
  name: string;
  email: string;
  token: string;
  role: Role;
  picture: string;
}

interface UserStore {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "user-storage",
    },
  ),
);
