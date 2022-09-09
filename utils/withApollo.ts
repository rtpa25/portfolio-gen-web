import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NextPageContext } from 'next';
import { withApollo } from 'next-apollo';

const createClient = (ctx: NextPageContext | undefined) => {
  return new ApolloClient({
    cache: new InMemoryCache({}),
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
    headers: {
      cookie:
        (typeof window === 'undefined'
          ? ctx?.req?.headers.cookie
          : undefined) || '',
    },
  });
};

export const createWithApollo = withApollo(createClient);
