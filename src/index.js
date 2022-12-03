import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize-css";
import "./styles.css";
import App from "./App";
import { NamesProvider } from "./providers/names";
import { AppStateProvider } from "./providers/app-state";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <NamesProvider>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </NamesProvider>
  </StrictMode>
);
