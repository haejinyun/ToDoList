import * as S from './index.styled';
import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { remove, complete } from '../redux/todos';
import { useEffect } from 'react';

function ToDoListPart() {
	let now = new Date(); // 현재 날짜 및 시간.
	let hour = now.getHours();
	let minutes = now.getMinutes();

	const [completeTime, setCompleteTime] = useState({
		nowHour: 0,
		nowMinutes: 0,
	});

	const dispatch = useDispatch();
	const todolist = useSelector((state) => state.todoinfo);

	const todoview = todolist.map((todoinfo, idx) => (
		<S.listbox key={todolist[idx].id}>
			<S.check
				type='checkbox'
				onChange={() => {
					dispatch(complete(todolist[idx].id));
					setCompleteTime((prev) => ({
						...prev,
						nowHour: now.getHours(),
						nowMinutes: now.getMinutes(),
					}));
					console.log(completeTime.nowHour + ':' + completeTime.nowMinutes);
				}}
			/>
			<S.todoitem>
				{todoinfo.complete === false ? <>{todoinfo.content}</> : <del>{todoinfo.content}</del>}
			</S.todoitem>
			<S.delBtn onClick={() => dispatch(remove(todolist[idx].id))}>
				<BsTrash size='20' />
			</S.delBtn>
		</S.listbox>
	));
	console.log(todolist);
	return (
		<>
			<S.allListsbox>{todoview}</S.allListsbox>
		</>
	);
}

export default ToDoListPart;

//stylecom은 모두 시작이 대문자.
//test
