type TodoType = {
  id: string;
  text: string;
  categoryId: number;
  isCompleted: boolean;
};

type Todos = TodoType[];

export type { TodoType, Todos };
