import {BASE_URL} from '../../../utils/constants';
import {TodoType, TodoTypeValidator} from '../Todo';

export default async function fetchTodoById(id?: string): Promise<TodoType> {
	const data = await fetch(`${BASE_URL}/todos/${id}`)
		.then(response => response.json());
	return TodoTypeValidator.parse(data);
}