import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:5000/api/news';

const createRequest = url => ({ url });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory }) => createRequest(`/search?q=${newsCategory}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
