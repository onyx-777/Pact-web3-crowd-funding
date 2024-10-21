"use client";

import { cn } from "@/lib/utils";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";

export const AddCampaignBtn = () => {
  const { setOpen } = useModal();

  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-[30rem] rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
          "bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60">
          <div className="flex flex-col justify-center items-center w-full h-full gap-4">
            <h3>
              <Plus size={30} />
            </h3>
            <p>Add Campaign</p>
          </div>
        </div>
      </div>
    </div>
  );
};
