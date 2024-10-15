import { FC } from "react";
import { FuncWithTodoProps, TodoType } from "../../types";
import clsx from "clsx";
import MarkIco from "../../../public/icons/mark-icon.svg?react";
import CrossIco from "../../../public/icons/cross-icon.svg?react";

type TodoItemProps = {
  todo: TodoType;
  handleTodoItemCheck: FuncWithTodoProps;
  handleDeleteClick: FuncWithTodoProps;
};

export const TodoItem: FC<TodoItemProps> = ({
  todo,
  handleTodoItemCheck,
  handleDeleteClick,
}) => (
  <label
    className={clsx(
      "relative border-b bg-white hover:bg-slate-50 w-full text-start cursor-pointer transition-colors flex items-center justify-between pr-6",
      todo.isCompleted && ""
    )}
  >
    <div>
      <input
        type="checkbox"
        className="absolute w-0 h-0 opacity-0"
        checked={todo.isCompleted}
        onChange={() => handleTodoItemCheck(todo)}
      />
      <div
        className={clsx(
          "w-6 h-6 rounded-full border-[#e3e4f1] border absolute top-1/2 -translate-y-1/2 left-6",
          todo.isCompleted && "bg-blue-500"
        )}
      >
        {todo.isCompleted && <MarkIco />}
      </div>
      <div
        className={clsx(
          "px-6 py-5 w-full rounded-[5px] text-todo-main pl-16",
          todo.isCompleted &&
            "line-through text-[rgb(148_149_165_/_var(--tw-text-opacity))]"
        )}
      >
        {todo.text}
      </div>
    </div>
    <div className="flex items-center h-max">
      <button onClick={() => handleDeleteClick(todo)}>
        <CrossIco className="text-function-main/70" />
      </button>
    </div>
  </label>
);
