import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { queryClient } from "@prime-fresh/modules";
import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Store } from '@reduxjs/toolkit';
import { Router } from '@remix-run/router';

export function applicationSetup(routes: Router, store: Store) {  
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  
    root.render(
      <StrictMode>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={routes}/>
          </QueryClientProvider>
        </Provider>
      </StrictMode>,
    );
  }