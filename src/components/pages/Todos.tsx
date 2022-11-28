import Todo from '../atoms/Todo';
import {useGetAllTodos} from '../model/Todo/getAllTodos';

export default function Todos() {
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