import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { cookies } from "./cookies";
// const https = require('https')
// let fetchOptions = {}
// if (process.env.NEXT_PUBLIC_BACKEND_IP.includes("https"))
//   fetchOptions = { agent: new https.Agent({ rejectUnauthorized: false }) }
let apolloClient;

function createApolloClient() {
  const dev = process.env.NODE_ENV !== 'production';
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(
      new HttpLink({
        uri: `http://10.0.8.13:33000/graphql`,
        // uri: `${process.env.NEXT_PUBLIC_BACKEND_IP}/graphql`,
        // fetchOptions
      })
    ),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            roles: {
              merge(existing, incoming) {
                return incoming;
              },
            },
          },
        },
      }
    }),
  });
}

const authLink = setContext((_, { headers }) => {
  const accessToken = cookies.getAccessToken();
  if (accessToken) {
    return {
      headers: {
        ...headers,
        authorization: accessToken,
      },
    };
  }

  return {
    headers: {
      ...headers,
    },
  };
});

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}
