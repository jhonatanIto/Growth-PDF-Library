import { create } from "zustand";
import { persist } from "zustand/middleware";

type Role = "user" | "moderator" | "admin";

interface User {
  name: string;
  email: string;
  role: Role;
  picture: string;
}

interface UserStore {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: (user, token) => {
        set({ user, token });
      },
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: "user-storage",
    },
  ),
);
