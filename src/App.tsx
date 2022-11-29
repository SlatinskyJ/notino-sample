import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AppBar from './components/molecules/AppBar';
import TodoDetail from './components/pages/TodoDetail';
import Todos from './components/pages/Todos';
import {AppContent} from './components/templates/AppContent';

function App() {
	return <>
		<AppBar/>
		<AppContent>
			<Switch>
				<Route path="/detail/:id">
					<TodoDetail/>
				</Route>
				<Route path="/">
					<Todos/>
				</Route>
			</Switch>
		</AppContent>
	</>;
}

export default App;