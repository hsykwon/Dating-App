window.onload = function() {
	if (localStorage.getItem('input1') !== null) {
		document.getElementById('display1').innerHTML = localStorage.getItem('input1');
	}
	if (localStorage.getItem('input2') !== null) {
		document.getElementById('display2').innerHTML = localStorage.getItem('input2');
	}
	if (localStorage.getItem('input3') !== null) {
		document.getElementById('display3').innerHTML = localStorage.getItem('input3');
	}
}

function storeData1() {
	document.getElementById('display1').innerHTML = document.getElementById('anniv').value;
	localStorage.setItem("input1", document.getElementById('anniv').value);
}

function storeData2() {
	document.getElementById('display2').innerHTML = document.getElementById('firstDate').value;
	localStorage.setItem("input2", document.getElementById('firstDate').value);
}

function storeData3() {
	document.getElementById('display3').innerHTML = document.getElementById('favMem').value;
	localStorage.setItem("input3", document.getElementById('favMem').value);
}

function changeCursor(){
  document.getElementById("anniv").style.cursor = "pointer";
}