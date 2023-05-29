import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GITHUB_GRAPHQL_URL } from "./config";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: GITHUB_GRAPHQL_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_GHTOKEN}`,
  },
  cache: new InMemoryCache(),
});

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => console.clear());
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
