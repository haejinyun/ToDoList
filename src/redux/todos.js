import { createSlice } from '@reduxjs/toolkit';
let itemid = 0;
export const todosSlice = createSlice({
	name: 'todos', // 리듀서 이름
	initialState: [], //초기 값
	reducers: {
		//액션 형식 지정
		add: (state, action) => {
			itemid++; //입력이 될떄마다 그 아이템의 인덱스 즉 id를 하나씩 증가 시켜줘
			state.push({
				id: itemid, //구별 가능한 id
				content: action.payload, //내용
				complete: false, //완료 여부
			});
		},
		remove: (state, action) => {
			//id가 같으면 지워
			return state.filter((todo) => todo.id !== action.payload);
		},
		complete: (state, action) => {
			return state.map(
				(
					todo //받은 id의 complete를 반대로 해
				) => (todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo)
			);
		},
	},
});

export default todosSlice.reducer;
export const { add, remove, complete } = todosSlice.actions;
