import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { QueryClientProvider, QueryClient } from "react-query";
import App from "./App.jsx";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </QueryClientProvider>
);
