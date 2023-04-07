import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import dotenv from "dotenv";

dotenv.config();

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${process.env.ghToken}`,
  },
  cache: new InMemoryCache(),
});

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => console.clear());
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
