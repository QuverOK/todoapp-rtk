import { FC } from "react";
import { FilterOptions, FuncWithTodoProps, Todos } from "../../types";
import { TodoItem } from "./todo-item";
import { Radio, RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";

type TodoTodosProps = {
  todos?: Todos;
  categoryId: string;
  itemsLeft?: number;
  filterOptions: string[];
  selected: string;
  setSelectedFilterOption: (option: FilterOptions) => void;
  handleDeleteClick: FuncWithTodoProps;
  handleTodoItemCheck: FuncWithTodoProps;
};

export const TodoTodos: FC<TodoTodosProps> = ({
  todos,
  categoryId,
  itemsLeft,
  handleTodoItemCheck,
  filterOptions,
  selected,
  setSelectedFilterOption,
  handleDeleteClick,
}) => {
  const todosList =
    todos &&
    todos.map((todo) => {
      if (!(categoryId === "0" || todo.categoryId === categoryId)) return;

      if (selected === "Active" && todo.isCompleted) return;
      if (selected === "Completed" && !todo.isCompleted) return;

      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleTodoItemCheck={handleTodoItemCheck}
          handleDeleteClick={handleDeleteClick}
        />
      );
    });

  const itemsLeftView = (itemsLeft || itemsLeft !== 0) && (
    <div className="">{itemsLeft} items left</div>
  );

  const categoriesRadioGroup = (
    <RadioGroup
      value={selected}
      onChange={setSelectedFilterOption}
      className="flex space-x-4"
    >
      {filterOptions.map((option) => (
        <Radio
          key={option}
          value={option}
          className={({ checked }) =>
            `cursor-pointer inline-flex py-2 px-4 rounded-lg ${
              checked
                ? "bg-functional-actve text-white"
                : "bg-gray-200 text-gray-800"
            }`
          }
        >
          {() => <span className="">{option}</span>}
        </Radio>
      ))}
    </RadioGroup>
  );

  return (
    <div className="mt-[18px] shadow-[0_35px_50px--15px_rgba(194,_195,_214,_0.5)] ">
      <div className="container rounded-[5px] overflow-hidden ">
        <ul className="">{todosList}</ul>
        <div className="flex items-center justify-between px-6 py-4 text-sm bg-white">
          {itemsLeftView}
          <div className="flex items-center justify-center gap-4">
            {categoriesRadioGroup}
          </div>
          <Link to={"./creation"} className="hover:text-function-main-hover">
            Create todo
          </Link>
        </div>
      </div>
    </div>
  );
};
