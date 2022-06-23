import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qfg89g3psw01xx3a8saxyk/master',
    cache: new InMemoryCache(),
});