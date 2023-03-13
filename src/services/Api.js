import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1/",
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: "categories",
        method: "Get",
      }),
    }),

    getSingleCategory: builder.query({
      query: (id) => ({
        url: `categories/${id}/products`,
      }),
    }),
    getProductDetail: builder.query({
      query: (id) => ({
        url: `products/${id}`,
      }),
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetSingleCategoryQuery,
  useGetProductDetailQuery,
} = productsApi;
