import { dedupExchange, fetchExchange } from "urql";


export const createUrqlClient = (ssrExchange: any) => ({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    // credentials: "include" as const,
  },
  exchanges: [
    dedupExchange,
    ssrExchange,
    fetchExchange,
  ],
});