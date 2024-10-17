import { TodoCategoryId, Todos } from "../types";

export const countTodosLeft = (categoryId: TodoCategoryId, todos?: Todos) => {
  if (!todos) return;

  if (categoryId === "0") {
    return todos.length;
  }

  return todos.filter((todo) => todo.categoryId == categoryId).length;
};
