import { TQueryParam, TResponseRedux } from "../../../types/global";
import { TEvent } from "../../../types/eventManagement.type";
import { baseApi } from "../../api/baseApi";

const eventManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/events",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TEvent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getProductById: builder.query({
      query: (id: string) => ({
        url: `/events/${id}`,
        method: "GET"
      }),
      transformResponse: (response: TResponseRedux<TEvent>) => response,
      
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/events",
        method: "POST",
        body: data,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/events/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/events/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = eventManagementApi;
