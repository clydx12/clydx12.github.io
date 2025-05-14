const table = document.getElementById("queue");

var queue = getCookie("queue").split(',');

const reset = "queue=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

function submit() {
	if ((fname != '' || fname != ' ') && (lname != '' || lname != ' ')) {
		var fname = document.getElementById("fname").value;
		var lname = document.getElementById("lname").value;
		var name = fname + " " + lname;
		queue.push(name);
		setCookie();
	}
}

function setCookie() {
	var value = queue.join(',');
	document.cookie = "queue=" + value + ";path=/";
}

function getCookie(name) {
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
	for (let i = queue.length; i >= 0; i--) {
		if (queue[i] == '' || queue[i] == ' ') {
			queue.splice(i, 1)
		}
	}
	
	for (let i = 0; i < queue.length; i++) {
		const row = table.insertRow();
		const order = row.insertCell();
		order.style.textAlign = "center";
		const fname = row.insertCell();
		const lname = row.insertCell();

		x = queue[i].split(' ');
		order.textContent = i + 1;
		fname.textContent = x[0];
		lname.textContent = x[1];
	}
}
