import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath : 'baseApi',
    baseQuery : fetchBaseQuery({baseUrl : 'https://fsm-backend.vercel.app'}),
    endpoints : (builder) => ({
        getAllDatas: builder.query({
            query: () => ({
                url: '/supplies',
                method: 'GET'
            })
        }),
    })
})


export const {useGetAllDatasQuery} = baseApi;