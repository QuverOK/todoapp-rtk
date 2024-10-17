type TodoType = {
  id: string;
  text: string;
  categoryId: string;
  isCompleted: boolean;
};

type Todos = TodoType[];

type TodoCategoryId = TodoType["categoryId"];

export type { TodoType, Todos, TodoCategoryId };
