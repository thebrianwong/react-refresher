import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/apolloClient.ts";
import { ModalContextProvider } from "./context/ModalContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </ApolloProvider>
  </StrictMode>
);
