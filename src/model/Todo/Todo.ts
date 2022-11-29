import {z} from 'zod';

export const TodoTypeValidator = z.object({
	completed: z.boolean(),
	id: z.number(),
	title: z.string(),
	userId: z.number()
});

export type TodoType = z.infer<typeof TodoTypeValidator>;

export const TodoListTypeValidator = z.array(TodoTypeValidator);

export type TodoListType = z.infer<typeof TodoListTypeValidator>;