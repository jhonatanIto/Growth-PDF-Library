import { Check } from "lucide-react";
import React, { useEffect, useRef } from "react";

interface Props {
  statusModal: boolean;
  setStatusModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentStatus: string;
  setCurrentStatus: React.Dispatch<React.SetStateAction<string>>;
}

const StatusModal = ({
  statusModal,
  setStatusModal,
  currentStatus,
  setCurrentStatus,
}: Props) => {
  const status = [
    {
      status: "Active",
      description: "Product visible on store and ready to sell",
    },
    {
      status: "Draft",
      description: "Not visible on store and not able to sell",
    },
    {
      status: "Unlisted",
      description: "Accessible only by direct link",
    },
  ];

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setStatusModal(false);
      }
    };

    window.addEventListener("mousedown", closeModal);
    return () => window.removeEventListener("mousedown", closeModal);
  });

  return (
    <div
      ref={modalRef}
      style={{ display: statusModal ? "block" : "none" }}
      className="p-1 rounded-[10px] absolute bg-white z-10 border border-gray-200 -top-1 -left-2 shadow-lg w-[106%]
    "
    >
      {status.map((s) => (
        <div
          className={`flex ${currentStatus === s.status ? "bg-gray-100" : ""} p-2 hover:bg-gray-100
           transition-all duration-150`}
          onClick={() => setCurrentStatus(s.status)}
        >
          <div className="w-8">
            {currentStatus === s.status ? <Check /> : ""}
          </div>
          <div className="flex flex-col items-start">
            <div className="font-semibold">{s.status}</div>
            <div className="text-[14px]">{s.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusModal;
