import { Handbag, Search, UserRound } from "lucide-react";

const Header = () => {
  return (
    <div className=" max-w-380 w-full ">
      <div className="grid grid-cols-3 items-center border-b1 p-5">
        <Search className="cursor-pointer" />
        <span className="font-bold text-[20px] text-center cursor-pointer">
          Growth PDF Library
        </span>
        <div className="flex justify-end gap-6">
          <UserRound className="cursor-pointer" />
          <Handbag className="cursor-pointer" />
        </div>
      </div>
      <nav className="flex justify-center gap-6 [&>div]:cursor-pointer p-2">
        <div>Home</div>
        <div>Catallog</div>
        <div>Contact</div>
      </nav>
    </div>
  );
};

export default Header;
