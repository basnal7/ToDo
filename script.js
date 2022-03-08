const table=document.getElementById("myTable");

function toDo(values) {
	const request = new XMLHttpRequest();
	request.open("get", "information.json", true);
	request.onload = () => {
		const json = JSON.parse(request.responseText);
		limit=values;
		data(json);
	
	}
	request.send();
}




function data(json) {
	var Tbl = document.getElementById('myTable');
while(Tbl.childNodes.length>2)
{
	Tbl.removeChild(Tbl.lastChild);
}

	for (var i = 0; i < limit; i++) {
		document.querySelector('#myTable').insertAdjacentHTML("beforeend", '<tr>' +
			'<td>' + json[i].FirstName + '</td>' +
			'<td>' + json[i].LastName + '</td>' +
			'<td>' + json[i].Email + '</td>' +
			'<td>' + json[i].Contact_No + '</td>' +
			'<td>' + json[i].Age + '</td>' +
			'<td>' + json[i].Address + '</td>' +
			'<td>' + json[i].Company + '</td>' +
			'<td>' + json[i].Designation + '</td>' +
			'</tr>'
		);
	}
	
}

document.addEventListener("DOMContentLoaded", () => {
	toDo(5);
});

