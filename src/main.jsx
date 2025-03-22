import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from './context/ErrorBoundary.jsx';
import ShopContextProvider from './context/ShopContext.jsx'
import App from './App.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ShopContextProvider>
          <App />
        </ShopContextProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
