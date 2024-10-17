import { FC } from "react";

type TodoCreationButtonProps = {
  text: string;
  onClick: () => void;
};

export const TodoCreationButton: FC<TodoCreationButtonProps> = ({
  text,
  onClick,
}) => (
  <div className="self-center mt-4">
    <button
      className="w-max  bg-[linear-gradient(90deg,_#9d7cf3_0%,_#839af8_100%)] hover:bg-[linear-gradient(90deg,_rgba(157,_124,_243,_0.46)_0%,_rgba(131,_154,_248,_0.72)_100%)] transition-all shadow-[0_35px_50px_-15px_rgba(194,_195,_214,_0.5)] hover: rounded-[10px] py-[11px] px-[26px] tracking-[-0.01em] text-white text-lg focus:outline-none"
      onClick={onClick}
    >
      {text}
    </button>
  </div>
);
