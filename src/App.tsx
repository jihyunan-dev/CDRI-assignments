import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>CDRI 과제</div>
    </QueryClientProvider>
  );
}

export default App;
