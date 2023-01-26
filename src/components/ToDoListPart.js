import * as S from './index.styled';
import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, complete } from '../redux/todos';

function ToDoListPart() {
	let now = new Date(); // 현재 날짜 및 시간.
	const [completeTime, setCompleteTime] = useState({
		nowHour: 0,
		nowMinutes: 0,
	});
	//const [localToDo, setLocalToDo] = useState([]); //담아야 하나..

	const dispatch = useDispatch();
	const todolist = useSelector((state) => state.todoinfo);

	useEffect(() => {
		//todolist가 바뀔때마다 localstorage에 저장해 list라는 이름으로
		localStorage.setItem('list', JSON.stringify(todolist));
	}, [todolist]);

	const getToDo = () => {
		//아직 함수를 못씀 쓰면 오류..
		//가져오는 부분.
		let loadToDo = localStorage.getItem('todos');
		if (loadToDo) {
			//만약 있다면
			//setLocalToDo(getToDo());

			return (loadToDo = JSON.parse(localStorage.getItem('todos'))); //이걸 담아서 리턴해
		} else {
			return []; //없으면 빈 배열
		}
	};
	console.log(todolist); // 들어온 값

	const todoview = todolist.map((todoinfo, idx) => (
		<S.Listbox key={todolist[idx].id}>
			<S.Check
				type='checkbox'
				onChange={() => {
					dispatch(complete(todolist[idx].id));
					setCompleteTime((prev) => ({
						...prev,
						nowHour: now.getHours(),
						nowMinutes: now.getMinutes(),
					}));
				}}
			/>
			<S.Todoitem>
				{todoinfo.complete === false ? (
					todoinfo.content
				) : (
					<S.DelItem style={{ width: '100%' }}>
						<del>{todoinfo.content} </del>
						<span>{completeTime.nowHour + ':' + completeTime.nowMinutes}</span>
					</S.DelItem>
				)}
			</S.Todoitem>
			<S.DelBtn
				onClick={() => {
					dispatch(remove(todolist[idx].id));
				}}
			>
				<BsTrash size='20' />
			</S.DelBtn>
		</S.Listbox>
	));
	//console.log(todolist);
	return (
		<>
			<S.AllListsbox>{todoview}</S.AllListsbox>
		</>
	);
}

export default ToDoListPart;

//stylecom은 모두 시작이 대문자.
//test
