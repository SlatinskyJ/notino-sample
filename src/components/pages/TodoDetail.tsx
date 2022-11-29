import {useQuery} from '@tanstack/react-query';
import {useParams} from 'react-router-dom';
import fetchTodoById from '../../model/Todo/getTodoById';
import {TodoType} from '../../model/Todo/Todo';

export default function TodoDetail() {
	const {id} = useParams();

	const {
		data,
		isLoading,
		error
	} = useQuery<TodoType | undefined>(['getTodoById', id], () => id ? fetchTodoById(id) : undefined);

	if (isLoading) return <div>Loading!</div>;
	if (error) return <div>Something went wrong. :(</div>;

	return <div>Detail of {data?.id}</div>;
}