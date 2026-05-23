import { Handbag, Search, UserRound } from "lucide-react";
import Login, { Logout } from "./Login";
import { useRef, useState } from "react";
import { useUserStore } from "../store/useUserStore";

const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const buttonRef = useRef<SVGSVGElement>(null);

  const user = useUserStore((state) => state.user);

  return (
    <div className=" max-w-380 w-full ">
      <div className="grid grid-cols-3 items-center border-b1 p-5">
        <Search className="cursor-pointer" />
        <span className="font-bold text-[20px] text-center cursor-pointer">
          Growth PDF Library
        </span>
        <div className="flex justify-end gap-6 relative">
          <UserRound
            ref={buttonRef}
            className="cursor-pointer"
            onClick={() => {
              if (!user) {
                setLoginModal((prev) => !prev);
              } else {
                setLogoutModal((prev) => !prev);
              }
            }}
          />
          <Handbag className="cursor-pointer" />
          <Login
            loginModal={loginModal}
            setLoginModal={setLoginModal}
            buttonRef={buttonRef}
          />
          <Logout
            logoutModal={logoutModal}
            setLogoutModal={setLogoutModal}
            buttonRef={buttonRef}
          />
        </div>
      </div>
      <nav className="flex justify-center gap-6 [&>div]:cursor-pointer p-2 select-none">
        <div>Home</div>
        <div>Catallog</div>
        <div>Contact</div>
        {user && user.role !== "user" && <div>Admin</div>}
      </nav>
    </div>
  );
};

export default Header;
