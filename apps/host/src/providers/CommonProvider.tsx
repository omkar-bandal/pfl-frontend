import { Theme, ThemeProvider } from "@mui/material";
import { Store } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { ToastProvider } from "@prime-fresh/ui_shared";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from "@prime-fresh/modules";

export const CommonProvider = ({
  children,
  store,
  theme
}: {
  children: React.ReactNode;
  store: Store;
  theme: Theme;
}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ToastProvider />
          {children}
        </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};
