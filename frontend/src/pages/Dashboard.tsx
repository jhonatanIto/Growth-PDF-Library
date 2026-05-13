import banner from "../images/banner.png";

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="w-full relative text-white">
        <img src={banner} className="object-cover w-full h-92 " />
        <div className="text-6xl  min-w-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
          Everything You Need To Grow - In One Library
        </div>
        <button
          className="bg-black p-3.5 px-6 text-[16px] absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer
         hover:bg-white hover:text-black transition-all duration-200"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
