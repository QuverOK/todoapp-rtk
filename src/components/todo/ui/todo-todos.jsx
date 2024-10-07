import { RadioGroup, Radio } from "@headlessui/react"
import { TodoItem } from "./todo-item"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

TodoTodos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      categoryId: PropTypes.number.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
  categoryId: PropTypes.string.isRequired,
  changeCompletedTodo: PropTypes.func.isRequired,
  handleTodoItemCheck: PropTypes.func.isRequired,
  itemsLeft: PropTypes.number.isRequired,
  filterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
}

export function TodoTodos({
  todos,
  categoryId,
  itemsLeft,
  changeCompletedTodo,
  handleTodoItemCheck,
  filterOptions,
  selected,
  setSelected,
  handleDeleteClick,
}) {
  const todosList = todos.map((todo) => {
    if (!(categoryId === "0" || todo.categoryId == categoryId)) return

    if (selected === "Active" && todo.isCompleted) return
    if (selected === "Completed" && !todo.isCompleted) return

    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        changeCompletedTodo={changeCompletedTodo}
        handleTodoItemCheck={handleTodoItemCheck}
        handleDeleteClick={handleDeleteClick}
      />
    )
  })
  return (
    <div className="mt-[18px] shadow-[0_35px_50px--15px_rgba(194,_195,_214,_0.5)] ">
      <div className="container rounded-[5px] overflow-hidden ">
        <ul className="">{todosList}</ul>
        <div className="px-6 py-4 flex items-center justify-between bg-white text-sm">
          <div className="">{itemsLeft} items left</div>
          <div className="flex gap-4 items-center justify-center">
            <RadioGroup
              value={selected}
              onChange={setSelected}
              className="flex space-x-4"
            >
              {filterOptions.map((option) => (
                <Radio
                  key={option}
                  value={option}
                  className={({ checked }) =>
                    `cursor-pointer inline-flex py-2 px-4 rounded-lg ${
                      checked
                        ? "bg-functional-actve text-white"
                        : "bg-gray-200 text-gray-800"
                    }`
                  }
                >
                  {({ checked }) => <span className="">{option}</span>}
                </Radio>
              ))}
            </RadioGroup>
          </div>
          <Link to={"./creation"} className="hover:text-function-main-hover">
            Create todo
          </Link>
        </div>
      </div>
    </div>
  )
}
