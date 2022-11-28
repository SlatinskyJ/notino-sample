import React from 'react';

import Todo from './components/atoms/Todo';
import {useGetAllTodos} from './components/model/Todo/getAllTodos';

function App() {
	const {
		data, isLoading, error
	} = useGetAllTodos();

	if (isLoading || error) return <div>Loading!</div>;

	return (
		<div>
			{data?.map((todo) => (
				<Todo todo={todo} key={todo.id}/>
			))}
		</div>
	);
}

export default App;