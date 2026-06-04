import { Plus, Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  colModal: boolean;
  setColModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const collections = [
  "Fitness & Health",
  "Home",
  "Parenting",
  "Pets",
  "Relationship",
];

const CollectionModal = ({ colModal, setColModal }: Props) => {
  const [selected, setSelected] = useState<string[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleCollection = (collection: string) => {
    setSelected((prev) =>
      prev.includes(collection)
        ? prev.filter((item) => item !== collection)
        : [...prev, collection],
    );
  };

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setColModal(false);
      }
    };

    window.addEventListener("mousedown", closeModal);

    return () => window.removeEventListener("mousedown", closeModal);
  }, []);

  return (
    <div
      style={{ display: colModal ? "block" : "none" }}
      ref={modalRef}
      className="w-72 rounded-xl shadow-2xl bg-white  border border-gray-200 top-0 z-10 absolute text-gray-700"
    >
      <h3 className="text-sm font-medium px-3 pt-3">Collections</h3>

      <div className="relative  border-b border-gray-200">
        <Search
          size={16}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400"
        />

        <input
          type="text"
          placeholder="Search or add collections"
          className="w-full rounded-md  py-2 pl-8 pr-2 text-sm outline-none "
        />
      </div>

      <div className=" p-2 border-b border-gray-200">
        {collections.map((collection) => (
          <label
            key={collection}
            className="flex cursor-pointer select-none gap-2 hover:bg-gray-100 rounded-[5px] p-2"
          >
            <input
              type="checkbox"
              checked={selected.includes(collection)}
              onChange={() => toggleCollection(collection)}
            />

            <span>{collection}</span>
          </label>
        ))}
      </div>
      <div className="p-2">
        <button className=" flex items-center gap-2 text-sm font-medium rounded-[5px] p-2 cursor-pointer w-full hover:bg-gray-100">
          <Plus size={16} />
          Add new collection
        </button>
      </div>
    </div>
  );
};

export default CollectionModal;
