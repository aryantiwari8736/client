import { apiSlice } from "../api/apiSlice";

export const notificationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotifications: builder.query({
      query: () => ({
        url: "get-all-notifications",
        method: "GET",
        mode:"cors",
        credentials: "include" as const,
      }),
    }),
    updateNotificationStatus: builder.mutation({
      query: (id) => ({
        url: `/update-notification/${id}`,
        method: "PUT",
        mode:"cors",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useGetAllNotificationsQuery,
  useUpdateNotificationStatusMutation,
} = notificationsApi;
