import type { LucideIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "./Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

interface SidebarItemProps {
  icon: LucideIcon;
  text: string;
  alert: boolean;
}

const SidebarItem = ({ icon: Icon, text, alert }: SidebarItemProps) => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [active, setActive] = useState(false);

  console.log(location);

  useEffect(() => {
    const loc = location.toLowerCase();
    const tex = text.toLowerCase();

    if (tex === "dashboard") {
      setActive(loc === "/admin" || loc === "/admin/");
    } else {
      setActive(loc.startsWith(`/admin/${tex}`));
    }
  }, [location, text]);

  return (
    <li
      className={`relative flex items-center py-2 px-5 my-1 font-medium rounded-md cursor-pointer transition-colors select-none
       group ${active ? "bg-linear-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}
      onClick={() => {
        if (text !== "Dashboard") {
          navigate(`/admin/${text}`);
        } else {
          navigate("/admin");
        }
      }}
    >
      <Icon />
      <span
        className={` overflow-hidden transition-all font-sans ${expanded ? "w-52 ml-3" : "w-0"}`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-4 w-2 h-2 rounded bg-indigo-400
            ${expanded ? "" : "top-2"}`}
        ></div>
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2  py-1 ml-6 bg-indigo-50 text-indigo-800 text-sm font-sans 
            invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
