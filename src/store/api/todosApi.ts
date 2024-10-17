import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Todos, TodoType } from "../../types";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todos, void>({
      query: () => "/todos",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todos" as const, id })),
              { type: "Todos", id: "LIST" },
            ]
          : [{ type: "Todos", id: "LIST" }],
    }),
    addTodo: builder.mutation<void, Omit<TodoType, "id">>({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
      onQueryStarted: async (todo, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          todosApi.util.updateQueryData("getTodos", undefined, (draft) => {
            const id = (draft.length + 1).toString();
            draft.push({ ...todo, id }); // ! Необходимо создать ID, который временно заменяет стандартный ID, генерируемый на бэкенде.
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deleteTodo: builder.mutation<void, string>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_, __, id) => [{ type: "Todos", id }], // Используйте _ вместо result
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          todosApi.util.updateQueryData("getTodos", undefined, (draft) => {
            return draft.filter((task) => task.id !== id);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    changeCompletedTodo: builder.mutation<void, TodoType>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: { isCompleted: !todo.isCompleted },
      }),
      invalidatesTags: (_, __, todo) => [{ type: "Todos", id: todo.id }],
      onQueryStarted: async (
        { id, isCompleted },
        { dispatch, queryFulfilled }
      ) => {
        const patchResult = dispatch(
          todosApi.util.updateQueryData("getTodos", undefined, (draft) => {
            const todo = draft.find((task) => task.id === id);
            if (todo) {
              todo.isCompleted = !isCompleted;
            }
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useChangeCompletedTodoMutation,
} = todosApi;
