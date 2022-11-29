import {useQuery} from '@tanstack/react-query';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import fetchTodoById from '../../model/Todo/getTodoById';
import {TodoType} from '../../model/Todo/Todo';
import Checkbox from '../atoms/Checkbox';
import {H3} from '../atoms/Text';

export default function TodoDetail() {
	const {id} = useParams();

	const {
		data,
		isLoading,
		error
	} = useQuery<TodoType | undefined>(['getTodoById', id], () => id ? fetchTodoById(id) : undefined);

	if (isLoading) return <div>Loading!</div>;
	if (error || !data) return <div>Something went wrong. :(</div>;

	return <div>
		<Container>
			<Header>
				<H3>ToDo detail with id: {data.id}</H3>
				<Checkbox value={data.completed}/>
			</Header>
			<Content>{data.title}</Content>
		</Container>
	</div>;
}

const Container = styled.div`
  min-width: 300px;
  width: 60vw;
  max-width: 1000px;
  background: ${props => props.theme.colors.primary};
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  height: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;