import { Theme, ThemeProvider } from "@mui/material";
import { Store } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

export const CommonProvider = ({
  children,
  store,
  theme
}: {
  children: React.ReactNode;
  store: Store;
  theme: Theme;
}) => {
  const queryClient = new QueryClient({defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },});
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};
