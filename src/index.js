import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import store from "./store/store";
import 'react-toastify/dist/ReactToastify.css';
import { theme } from "./theme/theme";
//Add Sentry
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";




//Add Sentry
Sentry.init({
  dsn: "https://d396429f27a149e19d80966bd8db28be@o4504185311002624.ingest.sentry.io/4504200551596032",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);
