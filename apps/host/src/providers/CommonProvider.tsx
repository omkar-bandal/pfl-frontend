import { Theme, ThemeProvider } from "@mui/material";
import { Store } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { ToastProvider } from "@prime-fresh/ui_shared";
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
        <ThemeProvider theme={theme}>
          <ToastProvider />
          {children}
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};
