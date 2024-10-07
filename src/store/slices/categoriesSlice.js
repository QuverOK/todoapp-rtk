import { createSlice } from "@reduxjs/toolkit"

const categoriesSlice = createSlice({
  name: "categories",
  initialState: ["All", "Work", "Books", "Study", "Health"],
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload)
    },
    removeCategory: (state, action) => {
      return state.filter((category) => category.id !== action.payload)
    },
  },
})

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { addCategory, removeCategory } = categoriesSlice.actions

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default categoriesSlice.reducer
