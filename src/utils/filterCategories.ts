import { Categories, Todos, TodoType } from "../types";

export const filterCategories = (
  categories?: Categories,
  todos?: Todos
): Categories => {
  if (!todos || !categories) {
    return [{ id: "0", name: "All" }, ...(categories || [])];
  }

  const ids: Array<string> = [];

  todos.forEach((todo: TodoType) => {
    if (!ids.some((id) => id === todo.categoryId)) {
      ids.push(todo.categoryId);
    }
  });

  const filteredCategories: Categories = [
    { id: "0", name: "All" },
    ...(categories.filter((category) => ids.includes(category.id)) || []),
  ];
  return filteredCategories;
};
