import * as S from './index.styled';

function TodoCalender() {
	let now = new Date(); // 현재 날짜 및 시간.
	let todayMonth = now.toLocaleString('en-US', { month: 'short' });
	let todoDate = now.getDate();
	let todoYear = now.getFullYear();
	const week = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];
	let dayOfWeek = week[now.getDay()];
	// let hour = now.getHours();
	// let minutes = now.getMinutes();

	return (
		<S.tableSet>
			<tr>
				<S.tdSet pos='center' bozsize='50px' size='40px' fontweight='bolder' rowSpan='2'>
					{todoDate}
				</S.tdSet>
				<S.tdSet rowspan='1' pos='left'>
					{todayMonth}
				</S.tdSet>
				<S.tdSet verpos='center' rowSpan='2' pos='right' size='20px'>
					{dayOfWeek}
				</S.tdSet>
			</tr>

			<tr>
				<S.tdSet pos='left'>{todoYear}</S.tdSet>
			</tr>
		</S.tableSet>
	);
}

export default TodoCalender;

//tr, td => tbody로 감싸고
// th => thead로 감싼다 ????? 개소리야~~~
// tr 아래 td 만 가능한가
// tr애 대한 내용을 적는 태그이기에??
// tr => 행
// td => duf
