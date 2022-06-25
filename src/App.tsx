import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apolo";
import { Router } from "./router";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
