import {
  BarChart3,
  BookOpen,
  LayoutDashboard,
  Package,
  Settings,
  UsersRound,
} from "lucide-react";
import Loading from "../../components/Loading";
import { useUserStore } from "../../store/useUserStore";
import Sidebar from "./components/Sidebar";
import SidebarItem from "./components/Sidebar-item";
import { Outlet } from "react-router-dom";

const Admin = () => {
  const user = useUserStore((state) => state.user);
  console.log(user);

  if (!user) {
    return (
      <div className="mt-40 flex justify-center items-center">
        <Loading />;
      </div>
    );
  }

  if (user?.role === "user") {
    return <div>Not allowed</div>;
  }

  return (
    <main className="flex">
      <Sidebar>
        <SidebarItem
          icon={LayoutDashboard}
          text="Dashboard"
          active={false}
          alert={false}
        />
        <SidebarItem
          icon={BookOpen}
          text="Products"
          active={false}
          alert={false}
        />
        <SidebarItem
          icon={BarChart3}
          text="Statistcs"
          active={false}
          alert={false}
        />
        <SidebarItem
          icon={UsersRound}
          text="Clients"
          active={false}
          alert={false}
        />
        <SidebarItem icon={Package} text="Orders" active={false} alert={true} />
        <SidebarItem
          icon={Settings}
          text="Settings"
          active={false}
          alert={false}
        />
      </Sidebar>

      <section className="flex-1 p-6 font-sans">
        <Outlet />
      </section>
    </main>
  );
};

export default Admin;
