import { ChangeEvent, FC, useState } from "react";
import { TodoCreationCategories } from "./todo-creation-categories";
import { TodoCreationInput } from "./todo-creation-input";
import { TodoCreationButton } from "./todo-creation-button";
import { useGetCategoriesQuery } from "../../store/api/categoriesApi";
import { useAddTodoMutation } from "../../store/api/todosApi";

export const TodoCreation: FC = () => {
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetCategoriesQuery();
  const [activeCategoryId, setActiveCategoryId] = useState<string>("0");
  const [addTodo] = useAddTodoMutation();
  const [todoText, setTodoText] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActiveCategoryId(e.target.value);
  };

  const handleButtonClick = async () => {
    if (todoText && activeCategoryId !== "0") {
      await addTodo({
        text: todoText,
        categoryId: activeCategoryId,
        isCompleted: false,
      }).unwrap();

      setTodoText("");
      setActiveCategoryId("0");
    }
  };

  if (isCategoriesLoading) {
    return <div>Loading...</div>;
  }
  if (!categories || categories.length === 0) {
    return <div className="text-5xl text-black">Error</div>;
  }
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
