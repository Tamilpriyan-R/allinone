import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginContextProvider from "./context/authContext/index.jsx";
import { SnackbarProvider } from "./context/snackBarProvider/index.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoginContextProvider>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </LoginContextProvider>
    </BrowserRouter>
  </StrictMode>
);
