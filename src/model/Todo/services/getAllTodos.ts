import {BASE_URL} from '../../../utils/constants';
import {TodoListType, TodoListTypeValidator} from '../Todo';

export default async function fetchAllTodos(): Promise<TodoListType> {
	const data = await fetch(`${BASE_URL}/todos`)
		.then(response => response.json());
	return TodoListTypeValidator.parse(data);
}