import { configureStore } from "@reduxjs/toolkit"
import { logger } from "./slices/middlewares"
import { categoriesApi } from "./api/categoriesApi"
import { todosApi } from "./api/todosApi"

const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      todosApi.middleware,
      categoriesApi.middleware
    ),
})

export default store
