import { BrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootRouter } from './routes/RootRouter';
import { GlobalStyle } from './styles/GlobalStyle';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
