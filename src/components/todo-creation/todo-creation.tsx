import { ChangeEvent, FC, useState } from "react";
import { TodoCreationCategories } from "./todo-creation-categories";
import { TodoCreationInput } from "./todo-creation-input";
import { TodoCreationButton } from "./todo-creation-button";
import { Categories } from "../../types";

export const TodoCreation: FC = () => {
  //   const { data: categories, isLoading: isCategoriesLoading } =
  //     useGetCategoriesQuery();
  const [activeCategoryId, setActiveCategoryId] = useState<number>(0);
  //   const [addTodo] = useAddTodoMutation();
  const [todoText, setTodoText] = useState("");

  //   if (isCategoriesLoading) {
  //     return <div>Loading...</div>;
  //   }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActiveCategoryId(+e.target.value);
  };

  const handleButtonClick = () => {};
  //   const handleButtonClick = async () => {
  //     if (todoText && activeCategoryId > 0) {
  //       await addTodo({
  //         text: todoText,
  //         categoryId: parseInt(activeCategoryId),
  //         isCompleted: false,
  //       }).unwrap();

  //       setTodoText("");
  //       setActiveCategoryId("0");
  //     }
  //   };

  const categories: Categories = [
    {
      id: "1",
      name: "Work",
    },
  ]; // temp

  return (
    <div className="mt-28">
      <div className="container flex flex-col gap-[14px]">
        <TodoCreationCategories
          categories={categories}
          activeCategoryId={activeCategoryId}
          setActiveCategoryId={setActiveCategoryId}
          handleCategoryChange={handleCategoryChange}
        />
        <TodoCreationInput
          placeholder={"What needs to be done?"}
          todoText={todoText}
          handleInputChange={handleInputChange}
        />
        <TodoCreationButton text={"Create todo"} onClick={handleButtonClick} />
      </div>
    </div>
  );
};
