const tablebody = document.querySelector("#jsondata >tbody");

function toDo() {

	const request = new XMLHttpRequest();
	request.open("get", "information.json");
	request.onload = () => {
		try {
			const json = JSON.parse(request.responseText);
			data(json);

		} catch (e) {
			console.warn("Could not load data !:");

		}
	}
	request.send();
}

function data(json) {


	json.forEach((row) => {
		const tr = document.createElement("tr");


		row.forEach((cell) => {
			const td = document.createElement("td");
			td.textContent = cell;
			tr.appendChild(td);
		});
		tablebody.appendChild(tr);
	});

}


document.addEventListener("DOMContentLoaded", () => {
	toDo();
});