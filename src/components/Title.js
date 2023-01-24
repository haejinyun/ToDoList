import * as S from './index.styled';

function Title() {
	let now = new Date(); // 현재 날짜 및 시간.
	let todayMonth = now.toLocaleString('en-US', { month: 'short' });
	let todoDate = now.getDate();
	let todoYear = now.getFullYear();
	const week = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];
	let dayOfWeek = week[now.getDay()];
	let hour = now.getHours();
	let minutes = now.getMinutes();

	return (
		<>
			<S.title>ToDos!</S.title>
			<S.tableSet>
				<tbody>
					<S.tdSet bozsize='50px' size='40px' fontweight='bolder'>
						{todoDate}
					</S.tdSet>
					<td>
						<tbody>
							<tr>{todayMonth}</tr>
							<tr> {todoYear}</tr>
						</tbody>
					</td>
					<S.tdSet size='20px'>{dayOfWeek}</S.tdSet>
				</tbody>
			</S.tableSet>
		</>
	);
}

export default Title;

//tr, td => tbody로 감싸고
// th => thead로 감싼다 ????? 개소리야~~~
// tr 아래 td 만 가능한가
// tr애 대한 내용을 적는 태그이기에??
// tr => 행
// td => duf
