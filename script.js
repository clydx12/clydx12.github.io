var table = document.getElementById("queue");

var queue = [];

function submit() {
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var name = fname + " " + lname;
	queue.push(name);
	setCookie();
}

function setCookie(value) {
	var value = queue.join(',');
	document.cookie = "queue=" + value + ";path=/";
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
