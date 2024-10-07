import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todos", id })),
              { type: "Todos", id: "LIST" },
            ]
          : [{ type: "Todos", id: "LIST" }],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
      onQueryStarted: async (todo, { dispatch, queryFulfilled }) => {
        // перед отправкой запроса (newTask - аргумент мутации, {диструктуризация инструментов мутации} )
        const patchResult = dispatch(
          todosApi.util.updateQueryData("getTodos", undefined, (draft) => {
            draft.push(todo) // Добавляем новую задачу к существующим в кэш
          })
        )
        try {
          // Ожидаем завершения запроса
          await queryFulfilled
        } catch {
          // Если произошла ошибка, откатываем изменения
          patchResult.undo()
        }
      },
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Todos", id }],
      onQueryStarted: async (todo, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          todosApi.util.updateQueryData("getTodos", undefined, (draft) => {
            const newDraft = draft.filter((task) => task.id !== todo.id)
            draft = newDraft
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
    changeCompletedTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: { isCompleted: !todo.isCompleted },
      }),
      invalidatesTags: (result, error, todo) => [
        { type: "Todos", id: todo.id },
      ],
      onQueryStarted: async (
        { id, isCompleted },
        { dispatch, queryFulfilled }
      ) => {
        const patchResult = dispatch(
          todosApi.util.updateQueryData("getTodos", undefined, (draft) => {
            const todo = draft.find((task) => task.id === id)
            if (todo) {
              todo.isCompleted = !isCompleted
            }
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
  }),
})

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useChangeCompletedTodoMutation,
} = todosApi
