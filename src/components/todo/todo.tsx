import { FC, useState, ChangeEvent } from "react";
import { Categories, FilterOptions, TodoType, Todos } from "../../types";
import { TodoTodos } from "./todo-todos";
import { TodoCategories } from "./todo-categories";
import { TodoTip } from "./todo-tip";

export const Todo: FC = () => {
  type TodoCategoryId = TodoType["categoryId"];

  const todos: Todos = [
    {
      id: "3",
      text: "Finish React project for client",
      categoryId: 1,
      isCompleted: false,
    },
  ]; // temp
  const categories: Categories = [];
  //   const { data: todos, isLoading: isTodosLoading } = useGetTodosQuery();
  //   const { data: categories, isLoading: isCategoriesLoading } =
  //     useGetCategoriesQuery();
  const [categoryId, setCategoryId] = useState<TodoCategoryId>(0);
  //   const [changeCompletedTodo] = useChangeCompletedTodoMutation();
  const [itemsLeft, setItemsLeft] = useState<undefined | number>(undefined);
  //   const [deleteTodo] = useDeleteTodoMutation();

  const countTodosLeft = (categoryId: TodoCategoryId) => {
    if (categoryId === 0) {
      return todos?.length;
    }

    return todos?.filter((todo) => todo.categoryId == categoryId).length;
  };
  const handleTodoItemCheck = (todo: TodoType) => {
    // changeCompletedTodo(todo).unwrap();
  };
  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryId(+e.target.value);
    setItemsLeft(() => countTodosLeft(+e.target.value));
  };
  const handleDeleteClick = (todo: TodoType) => {
    // deleteTodo(todo.id).unwrap();
    setItemsLeft(() => countTodosLeft(categoryId));
  };

  const filterOptions: FilterOptions[] = ["Active", "Completed"] as const;
  const [selectedFilterOption, setSelectedFilterOption] =
    useState<FilterOptions>(filterOptions[0]);

  //   if (isTodosLoading || isCategoriesLoading) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <>
      <TodoCategories
        categories={[{ id: "0", name: "All" }, ...categories]}
        activeCategoryId={categoryId}
        handleCategoryChange={handleCategoryChange}
      />
      <TodoTodos
        todos={todos}
        categoryId={categoryId}
        itemsLeft={itemsLeft ?? todos.length}
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
