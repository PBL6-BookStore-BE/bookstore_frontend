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
  dsn: "https://2cb01d293f9d460b802e0e08b334c68b@o4504246018572288.ingest.sentry.io/4504246030696448",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
