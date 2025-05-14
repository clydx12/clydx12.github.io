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

function serve(id) {
	x = parseInt(id.split('_')[1]);
	queue.splice(x - 1, 1);
	setCookie();
	updateQueueAdmin();
}

function remove(id) {
	x = parseInt(id.split('_')[1]);
	queue.splice(x - 1, 1);
	setCookie();
	updateQueueAdmin();
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

function updateQueueAdmin() {
	for (let i = queue.length; i >= 0; i--) {
		if (queue[i] == '' || queue[i] == ' ') {
			queue.splice(i, 1)
		}
	}

	const rows = table.rows.length;
	for (let i = rows - 1; i > 0; i--) {
		table.deleteRow(i);
	}
	
	for (let i = 0; i < queue.length; i++) {
		const row = table.insertRow();
		const order = row.insertCell();
		order.style.textAlign = "center";
		const fname = row.insertCell();
		const lname = row.insertCell();
		const serve = row.insertCell();
		const remove = row.insertCell();

		x = queue[i].split(' ');
		order.textContent = i + 1;
		fname.textContent = x[0];
		lname.textContent = x[1];
		serve.innerHTML = '<button type="button" id=serve_"' + order + '" onclick="serve(this.id)">Serve</button>';
		remove.innerHTML = '<button type="button" id=remove_"' + order + '" onclick="remove(this.id)">Remove</button>';
	}
}
