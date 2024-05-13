import React from "react";

import { Backdrop } from "./Backdrop";

type FilterModalProps = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  content: React.ReactNode;
};

export const SideModal = React.memo(
  ({ content, isOpen, setOpen }: FilterModalProps): JSX.Element => {
    return (
      <>
        {isOpen && <Backdrop onClick={() => setOpen(false)} />}
        <div
          className={
            isOpen
              ? `fixed bg-white z-10 top-0 w-4/12 h-full left-2/3 transition-all ease-out flex justify-center border-2 border-solid border-gray-400 rounded-l-lg`
              : `fixed bg-white top-0 w-4/12 h-full right-1/3 transition-all ease-out `
          }
        >
          {content}
        </div>
      </>
    );
  }
);
