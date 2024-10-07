import { useState } from "react"
import { TodoCategories } from "./todo-categories"
import { TodoTip } from "./todo-tip"
import { TodoTodos } from "./todo-todos"
import {
  useChangeCompletedTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
} from "../../../store/api/todosApi"
import { useGetCategoriesQuery } from "../../../store/api/categoriesApi"

export function Todo() {
  const { data: todos, isLoading: isTodosLoading } = useGetTodosQuery()
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetCategoriesQuery()
  const [categoryId, setCategoryId] = useState("0")
  const [changeCompletedTodo] = useChangeCompletedTodoMutation()
  const [itemsLeft, setItemsLeft] = useState(undefined)
  const [deleteTodo] = useDeleteTodoMutation()

  const countTodosLeft = (categoryId) => {
    if (categoryId === "0") {
      return todos?.length
    }

    return todos?.filter((todo) => todo.categoryId == categoryId).length
  }
  const handleTodoItemCheck = (todo) => {
    changeCompletedTodo(todo).unwrap()
  }
  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value)
    setItemsLeft(() => countTodosLeft(e.target.value))
  }
  const handleDeleteClick = (todo) => {
    deleteTodo(todo.id).unwrap()
    setItemsLeft(() => countTodosLeft(categoryId))
  }

  const filterOptions = ["Active", "Completed"]
  const [selectedFilterOption, setSelectedFilterOption] = useState(
    filterOptions[0]
  )

  if (isTodosLoading || isCategoriesLoading) {
    return <div>Loading...</div>
  }

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
        changeCompletedTodo={changeCompletedTodo}
        handleTodoItemCheck={handleTodoItemCheck}
        filterOptions={filterOptions}
        selected={selectedFilterOption}
        setSelected={setSelectedFilterOption}
        handleDeleteClick={handleDeleteClick}
      />
      <TodoTip text={""} />
    </>
  )
}
