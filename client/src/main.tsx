import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import './styles.css'; // Assuming you have a styles.css file for your CSS imports

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <h1>Hello, World!</h1>
        </QueryClientProvider>
    );
};

const container = document.getElementById('root'); // Make sure to have a div with id 'root' in your index.html
const root = createRoot(container!);
root.render(<App />);