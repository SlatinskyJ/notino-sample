export type APIFetchType<T> = {
	data: T | undefined,
	isLoading: boolean,
	error: unknown;
}