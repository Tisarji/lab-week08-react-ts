function myTable() {
	return (
		<div>
			<h2>NBA Championship 2024 Schedule</h2>
			<table border={1}>
				<thead>
					<tr>
						<th>Game Date</th>
						<th>Teams</th>
						<th>Location</th>
						<th>Result</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>June 13, 2024</td>
						<td>Boston Celtics vs. Dallas Mavericks</td>
						<td>TD Garden, Boston</td>
						<td>Win</td>
					</tr>
					<tr>
						<td>June 16, 2024</td>
						<td>Boston Celtics vs. Dallas Mavericks</td>
						<td>American Airlines Center, Dallas</td>
						<td>Loss</td>
					</tr>
					<tr>
						<td>June 19, 2024</td>
						<td>Boston Celtics vs. Dallas Mavericks</td>
						<td>TD Garden, Boston</td>
						<td>Win</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default myTable;
