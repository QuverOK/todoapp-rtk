import { FC } from "react";

type TodoTipProps = {
  text: string;
};

export const TodoTip: FC<TodoTipProps> = ({ text }) => (
  <div className="mt-[49px] mb-[49px]">
    <div className="container text-center">
      <span className="text-sm text-function-main">{text}</span>
    </div>
  </div>
);
