var table = document.getElementById("queue");

var queue = [];
queue.push(getCookie().split(','));

const reset = "queue=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

function submit() {
	if (fname != '' && lname != '') {
		var fname = document.getElementById("fname").value;
		var lname = document.getElementById("lname").value;
		var name = fname + " " + lname;
		queue.push(name);
		setCookie();
	}
}

function setCookie(value) {
	var value = queue.join(',');
	document.cookie = "queue=" + value + ";path=/";
}

function getCookie() {
	const name = "queue";
	const cookieString = document.cookie;
	const cookies = cookieString.split(';');
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].trim();
		if (cookie.startsWith(name + '=')) {
			return cookie.substring(name.length + 1);
		}
	}
	return "";
}

function updateQueue() {
	alert(getCookie("name"));
}
