import React from 'react';
import {TodoType} from '../model/Todo/Todo';

type Props = {
	todo: TodoType;
}

function Todo({todo}: Props) {
	const handleOnClick = () => {
		window.location.href = `/detail/${todo.id}`;
	};

	return (
		<div>
			<div onClick={handleOnClick}>
				{todo.title}
			</div>
		</div>
	);
}

export default Todo;