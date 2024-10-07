import clsx from "clsx"
import { MarkIco } from "../../../../public/home/mark-ico"
import PropTypes from "prop-types"
import { CrossIco } from "../../../../public/home/cross-ico"

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    categoryId: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  changeCompletedTodo: PropTypes.func.isRequired,
  handleTodoItemCheck: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
}

export function TodoItem({ todo, handleTodoItemCheck, handleDeleteClick }) {
  return (
    <label
      className={clsx(
        "relative border-b bg-white hover:bg-slate-50 w-full text-start cursor-pointer transition-colors flex items-center justify-between pr-6",
        todo.isCompleted && ""
      )}
    >
      <div>
        <input
          type="checkbox"
          className="absolute opacity-0 w-0 h-0"
          checked={todo.isCompleted}
          onChange={() => handleTodoItemCheck(todo)}
        />
        <div
          className={clsx(
            "w-6 h-6 rounded-full border-[#e3e4f1] border absolute top-1/2 -translate-y-1/2 left-6",
            todo.isCompleted && "bg-blue-500"
          )}
        >
          {todo.isCompleted && <MarkIco />}
        </div>
        <div
          className={clsx(
            "px-6 py-5 w-full rounded-[5px] text-todo-main pl-16",
            todo.isCompleted &&
              "line-through text-[rgb(148_149_165_/_var(--tw-text-opacity))]"
          )}
        >
          {todo.text}
        </div>
      </div>
      <div className="h-max flex items-center">
        <button onClick={() => handleDeleteClick(todo)}>
          <CrossIco className="text-function-main/70" />
        </button>
      </div>
    </label>
  )
}
