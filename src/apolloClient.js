import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    //uri: "https://movieql-osezlvyqsh.now.sh"
    uri: "http://localhost:4000/"
});

export default client;