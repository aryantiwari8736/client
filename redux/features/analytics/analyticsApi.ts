import { apiSlice } from "../api/apiSlice";

export const analyticsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCoursesAnalytics: builder.query({
            query: () => ({
                url: 'get-courses-analytics',
                method: 'GET',
                credentials: 'include' as const,
                mode:"cors"
            }),
        }),
        getUsersAnalytics: builder.query({
            query: () => ({
                url: 'get-users-analytics',
                method: 'GET',
                credentials: 'include' as const,
                mode:"cors"
            })
        }),
        getOrdersAnalytics: builder.query({
            query: () => ({
                url: 'get-orders-analytics',
                method: 'GET',
                credentials: 'include' as const,
                mode:"cors"
            })
        }),
    }),
});

export const { useGetCoursesAnalyticsQuery,useGetUsersAnalyticsQuery,useGetOrdersAnalyticsQuery } = analyticsApi;