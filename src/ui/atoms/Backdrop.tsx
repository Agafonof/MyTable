type BackdropProps = {
  onClick: () => void;
};

export const Backdrop = ({ onClick }: BackdropProps): JSX.Element => {
  return (
    <div
      className="fixed inset-0 z-10 bg-slate-500 opacity-60"
      onClick={onClick}
    ></div>
  );
};
