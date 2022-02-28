let loader = true;
const listContainer = document.getElementById('assignment-list');

(() => {
	const request = new XMLHttpRequest();
	request.onload = function () {
		const data = JSON.parse(request.responseText);
		listContainer.innerHTML = buildAssignmentList(data);
	}
	request.open("GET", `./data-access/assignments.php?get=all`);
	request.send()

})();

function buildAssignmentList(assignmentList) {
	let htmlList = '';
	assignmentList.forEach(assignment => {
		htmlList += `
			<li>
				${assignment.path}
			</li>
		`;
	});

	return htmlList;
}