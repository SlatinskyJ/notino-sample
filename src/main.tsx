import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import App from './App';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

const queryClient = new QueryClient();

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
