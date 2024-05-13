import React from "react";

import { Backdrop } from "./Backdrop";

type EditModalProps = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  content: React.ReactNode;
};

export const CenterModal = React.memo(
  ({ content, isOpen, setOpen }: EditModalProps): JSX.Element => {
    return (
      <>
        {isOpen && (
          <>
            <Backdrop onClick={() => setOpen(false)} />
            <div className="fixed bg-white z-10 top-1/4 w-2/4 h-2/4 left-1/4 transition-all ease-out flex justify-center border-2 border-solid border-gray-400 rounded overflow-scroll">
              {content}
            </div>
          </>
        )}
      </>
    );
  }
);
