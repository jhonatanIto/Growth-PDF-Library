import { ChevronsUpDown, CirclePlus } from "lucide-react";

const Product_Info = () => {
  return (
    <div>
      <h1 className="text-2xl">Add Product</h1>

      <div className="flex mt-5">
        <div>
          <div className="flex flex-col items-start p-4  bg-white rounded-2xl w-170 text-zinc-900 [&>div]:w-full">
            <div>
              <h1>Title</h1>
              <input
                type="text"
                placeholder="Book title..."
                className="border mt-1 border-zinc-300 p-1 w-full rounded-[10px]"
              />
            </div>

            <div className="mt-5">
              <h1>Description</h1>
              <textarea className="w-full mt-1 border border-zinc-300 h-35 rounded-[10px]"></textarea>
            </div>

            <div className="mt-5">
              <h1>Media</h1>
              <input
                type="file"
                className="w-full border mt-1 border-zinc-300 h-30 rounded-[10px]"
              />
            </div>

            <div className="mt-5">
              <h1>Collections</h1>
              <button className="cursor-pointer flex border rounded-2xl w-70 border-zinc-400  p-2 mt-1">
                {" "}
                <CirclePlus /> <span className="ml-2">Add collections</span>
              </button>
            </div>
          </div>
          <div className="p-4 mt-5 bg-white rounded-2xl w-170 text-zinc-900">
            <h1>Price</h1>
            <div className="relative mt-1">
              <input
                type="number"
                placeholder="0.00"
                className="border text-zinc-500 border-zinc-300 p-1 w-full rounded-[10px] pl-7"
              />
              <div className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-500">
                $
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 items-start p-4 w-84  bg-white rounded-2xl text-zinc-900 [&>div]:w-full">
          <div>
            <h1>Status</h1>
            <button
              className="border border-zinc-300 mt-1 rounded-[10px] cursor-pointer w-full flex items-center p-1 px-2
            flec justify-between "
            >
              Active
              <ChevronsUpDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Info;
