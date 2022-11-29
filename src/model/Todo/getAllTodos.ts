import {useQuery} from '@tanstack/react-query';
import {APIFetchType} from '../commonTypes';
import {TodoListType, TodoListTypeValidator} from './Todo';

export function useGetAllTodos(): APIFetchType<TodoListType> {
	const {data, isLoading, error} = useQuery(['getAllTodos'], () => todos());

	return {
		data: data ? TodoListTypeValidator.parse(data) : undefined,
		isLoading,
		error
	};
}

// rework this into regular api call, feel free to use any open api
export const todos = (): Promise<unknown> => new Promise((res) => {
	setTimeout(() => {
		res([
			{
				id: '1',
				title: 'Go shopping',
			},
			{
				id: '2',
				title: 'Very very long text. Very very long text. Very very long text. Very very long text. Very very long text. Very very long text. Very very long text.',
			},
			{
				id: '3',
				title: 'Prepare homework',
			},
		]);
	}, 1000);
});