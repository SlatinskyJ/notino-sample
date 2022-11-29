import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import App from './App';
import theme from './theme';
import GlobalStyle from './utils/GlobalStyle';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: import.meta.env.MODE !== 'development'
		}
	}
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router>
				<ThemeProvider theme={theme}>
					<GlobalStyle/>
					<App/>
				</ThemeProvider>
			</Router>
		</QueryClientProvider>
	</React.StrictMode>
);
