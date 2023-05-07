import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const product = createApi({
  reducerPath: 'productapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
  }),
})

export const { useGetProductsQuery } = product
