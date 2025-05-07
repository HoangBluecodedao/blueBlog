import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeDemo } from "./screens/HomeDemo/HomeDemo";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HomeDemo />
  </StrictMode>,
);
