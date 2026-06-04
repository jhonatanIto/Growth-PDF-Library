import { ChevronsUpDown, CirclePlus, Upload } from "lucide-react";
import CollectionModal from "./components/CollectionModal";
import { useState } from "react";
import StatusModal from "./components/StatusModal";

const Product_Info = () => {
  const [colModal, setColModal] = useState(false);
  const [statusModal, setStatusModal] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("Active");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);

  return (
    <div>
      <h1 className="text-2xl">Add Product</h1>

      <div className="flex mt-5">
        <div>
          <div className="flex flex-col items-start p-4  bg-white rounded-2xl w-170 text-zinc-900 [&>div]:w-full">
            <div>
              <h1>Title</h1>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Book title..."
                className="border mt-1 border-zinc-300 p-1 w-full rounded-[10px]"
              />
            </div>

            <div className="mt-5">
              <h1>Description</h1>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mt-1 border border-zinc-300 h-35 rounded-[10px]"
              ></textarea>
            </div>

            <div className="mt-5">
              <h1>Media</h1>

              <label
                htmlFor="media-upload"
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-zinc-300 
                rounded-xl cursor-pointer transition-all hover:border-zinc-500 hover:bg-zinc-100"
              >
                <Upload size={28} className="text-zinc-500 mb-2" />
                <span className="font-medium text-zinc-800">
                  Upload New File
                </span>
                <span className="text-sm text-zinc-500 mt-1">
                  PNG, JPG, WEBP
                </span>
              </label>
              <input
                onChange={(e) => {
                  const currFile = e.target.files?.[0];
                  if (currFile) {
                    setFile(currFile);
                  }
                }}
                id="media-upload"
                type="file"
                className="hidden"
              />
            </div>

            <div className="mt-5 relative">
              <h1>Collections</h1>
              <button
                className="cursor-pointer border rounded-2xl min-w-70 max-w-120 border-zinc-400 p-1 mt-1"
                onClick={() => setColModal(true)}
              >
                {selected.length < 1 && (
                  <div className="flex items-center bg-gray-200 w-fit px-1 rounded-2xl pr-4">
                    <CirclePlus size={18} />{" "}
                    <span className="ml-2 text-[14px] ">Add collections</span>
                  </div>
                )}
                {selected.length > 0 && (
                  <div className="flex">
                    {selected.map((s) => (
                      <span className="ml-1 text-[14px] bg-gray-200 w-fit rounded-2xl px-2  ">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </button>
              <CollectionModal
                colModal={colModal}
                setColModal={setColModal}
                selected={selected}
                setSelected={setSelected}
              />
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
              className="border border-zinc-300 mt-1 rounded-[10px] cursor-pointer w-full flex items-center 
            flec justify-between relative px-2 p-0.5"
              onClick={() => setStatusModal(true)}
            >
              {currentStatus}
              <ChevronsUpDown size={20} />
              <StatusModal
                statusModal={statusModal}
                setStatusModal={setStatusModal}
                currentStatus={currentStatus}
                setCurrentStatus={setCurrentStatus}
              />
            </button>
          </div>
        </div>
      </div>
      <button
        className="bg-zinc-700 text-white px-6 rounded-2xl text-[17px] mt-5 ml-1
       cursor-pointer hover:bg-zinc-500 transition-all duration-150"
      >
        save
      </button>
    </div>
  );
};

export default Product_Info;
