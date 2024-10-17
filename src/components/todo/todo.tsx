import { FC, useState, ChangeEvent } from "react";
import { FilterOptions, TodoType } from "../../types";
import { TodoTodos } from "./todo-todos";
import { TodoCategories } from "./todo-categories";
import { TodoTip } from "./todo-tip";
import {
  useChangeCompletedTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
} from "../../store/api/todosApi";
import { useGetCategoriesQuery } from "../../store/api/categoriesApi";
import { filterCategories } from "../../utils/filterCategories";
import { countTodosLeft } from "../../utils/countTodosLeft";
import { TodoCategoryId } from "../types";

export const Todo: FC = () => {
  const filterOptions: FilterOptions[] = ["Active", "Completed"] as const;

  const { data: todos, isLoading: isTodosLoading } = useGetTodosQuery();
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetCategoriesQuery();
  const [changeCompletedTodo] = useChangeCompletedTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const [categoryId, setCategoryId] = useState<TodoCategoryId>("0");
  const [itemsLeft, setItemsLeft] = useState<undefined | number>(undefined);
  const [selectedFilterOption, setSelectedFilterOption] =
    useState<FilterOptions>(filterOptions[0]);

  const handleTodoItemCheck = (todo: TodoType) => {
    changeCompletedTodo(todo).unwrap();
  };
  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryId(e.target.value);
    setItemsLeft(() => countTodosLeft(e.target.value, todos));
  };
  const handleDeleteClick = (todo: TodoType) => {
    deleteTodo(todo.id).unwrap();
    setItemsLeft(() => countTodosLeft(categoryId, todos));
  };

  if (isTodosLoading || isCategoriesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TodoCategories
        categories={filterCategories(categories, todos)}
        activeCategoryId={categoryId}
        handleCategoryChange={handleCategoryChange}
      />
      <TodoTodos
        todos={todos}
        categoryId={categoryId}
        itemsLeft={itemsLeft ?? todos?.length}
        handleTodoItemCheck={handleTodoItemCheck}
        filterOptions={filterOptions}
        selected={selectedFilterOption}
        setSelectedFilterOption={setSelectedFilterOption}
        handleDeleteClick={handleDeleteClick}
      />
      <TodoTip text={""} />
    </>
  );
};
