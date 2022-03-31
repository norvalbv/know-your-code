import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const questionsApi = createApi({
  reducerPath: `questionsApi`,
  baseQuery: fetchBaseQuery({ baseUrl: `/` }),
  endpoints: (builder) => ({
    getAlltopics: builder.query({
      query: () => `topics`
    }),
    loadQuestions: builder.query({
      query: (selectedTopic, questionType) =>
        `/${selectedTopic.toLowerCase()}/all/${questionType.category}`
    })
  })
});

export const { useLoadQuestionsQuery, useGetAlltopicsQuery } = questionsApi;
