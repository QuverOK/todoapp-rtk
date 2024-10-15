type Category = {
  id: string;
  name: string;
};

type Categories = [Category, ...Category[]];

export type { Category, Categories };
