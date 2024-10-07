import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Categories", id })),
              { type: "Categories", id: "LIST" },
            ]
          : [{ type: "Categories", id: "LIST" }],
    }),
    addCategory: builder.mutation({
      query: (category) => ({
        url: "/categories",
        method: "POST",
        body: category,
      }),
      invalidatesTags: [{ type: "Categories", id: "LIST" }],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Categories", id }],
    }),
  }),
})

export const {
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesApi
