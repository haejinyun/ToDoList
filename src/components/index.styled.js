import styled from 'styled-components';
// import { BsTrashFill } from 'react-icons/bs';

export const back = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 auto;
`;

export const inputBox = styled.input`
	width: 224px;
	height: 30px;
	border: none;
	border-bottom: solid 1px gray;
	padding-left: 8px;
	margin-right: 15px;
	outline: none;
`;

export const title = styled.p`
	margin-top: 150px;
	font-size: 50px;
	color: rgb(114, 134, 211);
	text-align: center;
	font-weight: bolder;
`;

export const submitBtn = styled.input`
	background-color: rgb(142, 167, 233);
	border-radius: 10px;
	color: white;
	border: none;
	width: 30px;
	height: 30px;
	font-size: 20px;
	font-weight: bolder;
	cursor: pointer;
	:hover {
		transition: 0.2s;
		transform: scale(1.2);
	}
`;

export const allListsbox = styled.ul`
	width: 300px;
	margin-top: 30px;
	margin-left: auto;
	margin-right: auto;
`;

export const listbox = styled.li`
	/* display: flex;
	flex-wrap: wrap;
	flex-direction: row; */
	width: 250px;
	margin-top: 10px;
	display: flex;
	margin-bottom: 10px;
`;

export const todoitem = styled.div`
	text-align: center;
`;

export const delBtn = styled.button`
	margin-left: auto;
	background-color: transparent;
	border: none;
	cursor: pointer;
	:hover {
		transition: 0.2s;
		transform: scale(1.2);
	}
`;

export const check = styled.input`
	margin-right: 15px;
	cursor: pointer;
`;

export const tableSet = styled.table`
	margin: 0 auto;
	width: 280px;
	text-align: center;
	margin-bottom: 15px;
`;

export const tdSet = styled.td`
	text-align: ${(props) => props.pos};
	vertical-align: center;
	font-size: ${(props) => props.size};
	font-weight: ${(propps) => propps.fontweight};
	width: ${(propps) => propps.bozsize};
`;

//이렇게 파일 관리를 하는 것이 맞는가?
// 페이지 이동 없이 한 페이지 이기에 Home이라고 만들었지만 components 내부에 index.js 가 없어도 무방한가
