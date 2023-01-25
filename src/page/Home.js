import styled from 'styled-components';
import InputPart from '../components/InputPart';
import Title from '../components/Title';
import TodoCalender from '../components/TodoCalender';
import ToDoListPart from '../components/ToDoListPart';

const TodoList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	width: 80%;
	margin-top: 240px;
`;

function Home() {
	return (
		<TodoList>
			<Title />
			<TodoCalender />
			<InputPart />
			<ToDoListPart />
		</TodoList>
	);
}

export default Home;
