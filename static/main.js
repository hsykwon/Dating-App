window.onload = function() {
	if (localStorage.getItem('input') !== null) {
		document.getElementById('display').innerHTML = localStorage.getItem('input');
	}

}

function storeData() {

	// console.log(localStorage.getItem("input"));
	document.getElementById('display').innerHTML = document.getElementById('firstDate').value;
	// storage.removeItem('input');
	localStorage.setItem("input", document.getElementById('firstDate').value);
	console.log("A");
	console.log(localStorage.getItem("input"));
}