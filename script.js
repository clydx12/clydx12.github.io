const queue = []

var table = document.getElementById("queue");

function submit() {
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	setCookie(fname + " " + lname);
}

function setCookie(value) {
	const d = new Date();
	let login = "login=" + d.toUTCString();
	document.cookie = "name=" + value + ";" + login + ";path=/";
}

function getCookie() {
	let name = "name=";
	let decodedCookie = decodeURIComponenet(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
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
