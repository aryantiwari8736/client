import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: (type) => ({
        url: `get-orders`,
        method: "GET",
        mode:"cors",
        credentials: "include" as const,
      }),
    }),
    getStripePublishablekey: builder.query({
      query: () => ({
        url: `payment/stripepublishablekey`,
        method: "GET",
        mode:"cors",
        credentials: "include" as const,
      }),
    }),
    createPaymentIntent: builder.mutation({
      query: (amount) => ({
        url: "payment",
        method: "POST",
        body: {
          amount,
        },
        mode:"cors",
        credentials: "include" as const,
      }),
    }),
    createOrder: builder.mutation({
      query: ({ courseId, payment_info }) => ({
        url: "create-order",
        body: {
          courseId,
          payment_info,
        },
        method: "POST",
        mode:"cors",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useGetAllOrdersQuery,useGetStripePublishablekeyQuery, useCreatePaymentIntentMutation ,useCreateOrderMutation} =
  ordersApi;
