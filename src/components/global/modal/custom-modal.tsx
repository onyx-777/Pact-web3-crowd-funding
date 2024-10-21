"use client";

import { useModal } from "@/providers/modal-provider";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  title?: string;
  subheading?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const CustomModal = ({ children, defaultOpen, subheading, title }: Props) => {
  const { isOpen, setClose } = useModal();

  return (
    <Dialog open={isOpen || defaultOpen} onOpenChange={setClose}>
      <DialogContent className="sm:max-w-[80vw] h-[90vh] flex flex-col md:min-w-[500px]">
        <DialogHeader className="bg-background sticky top-0">
          <DialogTitle className="text-xl mt-2 font-bold text-left">
            {title}.
          </DialogTitle>
          {subheading && (
            <DialogDescription className="text-left font-medium">
              {subheading}.
            </DialogDescription>
          )}
        </DialogHeader>
        <Separator className="w-full" />
        <ScrollArea className="flex-grow px-px pb-4">
          <div className="h-full">{children}</div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;