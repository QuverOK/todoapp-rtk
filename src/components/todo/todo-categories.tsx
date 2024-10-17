import { ChangeEvent, FC } from "react";
import { Categories } from "../../types";
import clsx from "clsx";

type TodoCategoriesProps = {
  categories?: Categories;
  activeCategoryId: string;
  handleCategoryChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TodoCategories: FC<TodoCategoriesProps> = ({
  categories,
  activeCategoryId,
  handleCategoryChange,
}) => {
  const getCategories =
    categories &&
    categories.map((category) => (
      <li key={category.id} className="text-base transition-colors">
        <label className="cursor-pointer">
          <input
            type="radio"
            name="category"
            value={category.id}
            className="hidden"
            onChange={handleCategoryChange}
          />
          <span
            className={clsx(
              "transition-colors",
              activeCategoryId === category.id && "text-functional-actve"
            )}
          >
            {category.name}
          </span>
        </label>
      </li>
    ));
  return (
    <div className="mt-[18px] ">
      <div className="container">
        <div className="py-4 w-full bg-white rounded-[5px] px-[25px]">
          <ul className="flex-col min-[563px]:flex-row flex items-center justify-center gap-[52px] font-bold text-base">
            {getCategories}
          </ul>
        </div>
      </div>
    </div>
  );
};
