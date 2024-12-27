import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { root } from "./root";
import { ThemeProvider } from "./components/ui/theme-provider";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='system' storageKey="vite-ui-theme">
      <RouterProvider router={root} />
    </ThemeProvider>
  </StrictMode>
);
