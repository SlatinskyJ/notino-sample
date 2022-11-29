import {z} from 'zod';

export const TodoTypeValidator = z.object({
	id: z.string(),
	title: z.string(),
});

export type TodoType = z.infer<typeof TodoTypeValidator>;

export const TodoListTypeValidator = z.array(TodoTypeValidator);

export type TodoListType = z.infer<typeof TodoListTypeValidator>;