const queue = []

var table = document.getElementById("queue");

function submit() {
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	setCookie(fname + " " + lname + "+");
}

function setCookie(value) {
	document.cookie = document.cookie + value;
}

function getCookie() {
	var x = document.cookie;
	x.split("+");
	queue = x;
}

function updateQueue() {
	alert(getCookie("name"));
}
