import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TodoDetail from './components/pages/TodoDetail';
import Todos from './components/pages/Todos';

function App() {
	return <Switch>
		<Route path="/detail/:id">
			<TodoDetail/>
		</Route>
		<Route path="/">
			<Todos/>
		</Route>
	</Switch>;
}

export default App;