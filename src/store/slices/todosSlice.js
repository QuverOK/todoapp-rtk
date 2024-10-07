import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {
    id: 1,
    text: "Create a new todo list",
    category: "Work",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Buy groceries for the week",
    category: "Personal",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Finish React project for client",
    category: "Work",
    isCompleted: false,
  },
  {
    id: 4,
    text: "Read a chapter of a book",
    category: "Personal",
    isCompleted: false,
  },
  {
    id: 5,
    text: "Plan weekend trip with friends",
    category: "Personal",
    isCompleted: false,
  },
  {
    id: 6,
    text: "Prepare presentation for Monday",
    category: "Work",
    isCompleted: false,
  },
  {
    id: 7,
    text: "Attend team meeting at 3 PM",
    category: "Work",
    isCompleted: false,
  },
  {
    id: 8,
    text: "Reply to client emails",
    category: "Work",
    isCompleted: false,
  },
  {
    id: 9,
    text: "Schedule dentist appointment",
    category: "Personal",
    isCompleted: false,
  },
  {
    id: 10,
    text: "Work out at the gym",
    category: "Personal",
    isCompleted: false,
  },
  {
    id: 11,
    text: "Update project documentation",
    category: "Work",
    isCompleted: false,
  },
  {
    id: 12,
    text: "Research new technology trends",
    category: "Work",
    isCompleted: false,
  },
  {
    id: 13,
    text: "Water the plants",
    category: "Personal",
    isCompleted: false,
  },
  {
    id: 14,
    text: "Prepare for Thursday’s interview",
    category: "Work",
    isCompleted: false,
  },
  {
    id: 15,
    text: "Organize the workspace",
    category: "Personal",
    isCompleted: true,
  },
]

const todosSlice = createSlice({
  name: "todos",
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
    changeCompletedTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
    },
  },
})

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { addTodo, removeTodo, changeCompletedTodo } = todosSlice.actions

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default todosSlice.reducer
