const queue = []

var table = document.getElementById("queue");

function submit() {
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	setCookie("name", fname + " " + lname);
}

function setCookie(name, value) {
	document.cookie = name + "=" + value + ";path=/";
}

function getCookie(name) {
	let name = name + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function updateQueue() {
	alert(getCookie("name"));
}
