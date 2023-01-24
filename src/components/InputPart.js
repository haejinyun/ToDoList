import * as S from './index.styled';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/todos';

function InputPart() {
	const dispatch = useDispatch();
	//const todos = useSelector((state) => state.todoinfo);

	const [todoItem, setToDoItem] = useState({
		//입력받은 todo를 받고 id 와 text를 가짐.
		id: 0,
		text: '',
	});

	const bringText = (e) => {
		setToDoItem({ text: e.target.value }); //입력받은 문자를 state의 text에 넣어
	};

	const textReset = () => {
		setToDoItem({ text: '' });
	};
	return (
		<>
			<S.back>
				<form
					onSubmit={(e) => {
						//엔더 및 버튼을 누르면 실행.
						e.preventDefault();
						if (todoItem.text !== '') {
							console.log('할일 들어 옴.');
							//입력된 값이 빈값이 아니라면
							dispatch(add(todoItem.text)); // 입력된 값을 add액션을 실행.
						} else {
							alert('할 일을 입력하지 않았습니다!');
						} //입력된 값 없을때
						textReset(); //입력 칸을 빈 칸으로 돌리기.
					}}
				>
					<>
						<S.inputBox
							value={todoItem.text}
							type='text'
							name='toDoItems'
							placeholder='할 일을 입력하세요.'
							onChange={bringText}
						/>
						<S.submitBtn type='submit' value='+' />
					</>
				</form>
			</S.back>
		</>
	);
}

export default InputPart;

//<p>test: {JSON.stringify(todos)}</p>
