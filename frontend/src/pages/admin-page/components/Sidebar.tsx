import {
  ChevronFirst,
  ChevronLast,
  MoreVertical,
  UserCircle,
} from "lucide-react";

import { useUserStore } from "../../../store/useUserStore";
import { createContext, useState, type ReactNode } from "react";

type SidebarContextType = {
  expanded: boolean;
};

type SidebarProps = {
  children: ReactNode;
};

export const SidebarContext = createContext<SidebarContextType>({
  expanded: true,
});

const Sidebar = ({ children }: SidebarProps) => {
  const user = useUserStore((state) => state.user);
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen text-[20px]">
      <nav className="h-full flex flex-col  bg-white border-r border-gray-200 shadow-sm">
        <div
          className={`p-4 pb-2 flex items-center  ${expanded ? "justify-between" : "justify-center"} `}
        >
          <span
            className={`overflow-hidden transition-all text-2xl whitespace-nowrap
            ${expanded ? "w-52" : "w-0"}`}
          >
            Growth PDF Library
          </span>
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 flex justify-center items-center "
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}{" "}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div
          className={`border-t border-gray-200 flex ${expanded ? "" : "justify-center"} items-center p-3`}
        >
          {user?.picture ? (
            <img src={user.picture} alt={user.name} />
          ) : (
            <UserCircle />
          )}
          <div
            className={`flex justify-between items-center  overflow-hidden transition-all 
            ${expanded ? "w-52 ml-3" : "w-0"}`}
          >
            <div className="leading-4 font-sans ">
              <h4 className="font-semibold">{user?.name}</h4>
              <span className="text-xs text-gray-600">{user?.email}</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
