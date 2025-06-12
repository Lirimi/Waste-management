import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Skip } from "../types";

export const skipsApi = createApi({
  reducerPath: "skipsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://app.wewantwaste.co.uk/api/" }),
  endpoints: (builder) => ({
    getSkipsByLocation: builder.query<
      Skip[],
      { postcode: string; area: string }
    >({
      query: ({ postcode, area }) =>
        `skips/by-location?postcode=${postcode}&area=${area}`,
    }),
  }),
});

export const { useGetSkipsByLocationQuery } = skipsApi;
