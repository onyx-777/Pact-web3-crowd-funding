"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  owner: string;
  title: string;
  description: string;
  target: number;
  deadline: number;
  amountCollected: number;
  imageUrl: string;
  donators: string[];
  donations: number[];
}

export function CardDemo(props: Props) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-[30rem] rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
          "bg-cover"
        )}
        style={{
          backgroundImage: `url(${props.imageUrl}?auto=format&fit=crop&w=1651&q=80)`,
        }}
      >
        {" "}
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          {props.owner}
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {props.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {props.description}
          </p>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {props.deadline}
          </p>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {props.donations}
          </p>
        </div>
      </div>
    </div>
  );
}
