import {useQuery} from '@tanstack/react-query';
import styled from 'styled-components';
import fetchAllTodos from '../../model/Todo/getAllTodos';
import Todo from '../atoms/Todo';

export default function Todos() {
	const {data, isLoading, error} = useQuery(['getAllTodos'], () => fetchAllTodos());

	if (isLoading) return <div>Loading!</div>;
	if (error) return <div>Something went wrong. :(</div>;

	return (
		<Container>
			{data?.map((todo) => (
				<Todo todo={todo} key={todo.id}/>
			))}
		</Container>
	);
}

const Container = styled.div`
  margin-top: ${props => props.theme.sizes.xl};
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.sizes.l};
`;