import { BrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootRouter } from './routes/RootRouter';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
