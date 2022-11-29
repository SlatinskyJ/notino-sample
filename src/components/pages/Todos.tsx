import styled from 'styled-components';
import {useGetAllTodos} from '../../model/Todo/getAllTodos';
import Todo from '../atoms/Todo';

export default function Todos() {
	const {
		data, isLoading, error
	} = useGetAllTodos();

	if (isLoading || error) return <div>Loading!</div>;

	return (
		<Container>
			{data?.map((todo) => (
				<Todo todo={todo} key={todo.id}/>
			))}
		</Container>
	);
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.sizes.l};
`;