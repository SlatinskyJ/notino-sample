import React from 'react';
import styled from 'styled-components';
import {TodoType} from '../../model/Todo/Todo';

type Props = {
	todo: TodoType;
}

function Todo({todo}: Props) {
	const handleOnClick = () => {
		window.location.href = `/detail/${todo.id}`;
	};

	return (
		<Container>
			<div onClick={handleOnClick}>
				{todo.title}
			</div>
		</Container>
	);
}

const Container = styled.div`
  border-radius: ${props => props.theme.sizes.s};
  border: 1px solid ${props => props.theme.colors.accent};
  padding: ${props => props.theme.sizes.m} ${props => props.theme.sizes.xl};
  min-width: 300px;
  width: 60vw;
  max-width: 1000px;
  background: ${props => props.theme.colors.primary};
  box-shadow: 3px 3px 4px #343434;
`;

export default Todo;