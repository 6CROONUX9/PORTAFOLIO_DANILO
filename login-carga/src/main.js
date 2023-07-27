const dataUsers = [
	{
		id: 1,
		userFullname: "brayan munoz",
		userEmail: "brayan@academlo.com",
		pass1User: "123",
	},
	{
		id: 2,
		userFullname: "stiven quiroz",
		userEmail: "stiven@academlo.com",
		pass1User: "123",
	},
];

const formUserHTML = document.querySelector("#formUser");
const contentModalError = document.querySelector(".contentModalError");
const iconClose = document.querySelector(".icon__close");

function printUsers(users) {
	let html = "";

	for (const { pass1User, userEmail, userFullname } of users) {
		html += `
			<div class="user">
				<p>${userFullname}</p>
				<p>${userEmail}</p>
				<p>${pass1User}</p>
			</div>
		`;
	}

	document.querySelector(".users").innerHTML = html;
}

function printAlert(text = "naruto") {
	document.querySelector("#modalText").textContent = text;
	contentModalError.classList.toggle("contentModalError__show");
}

formUserHTML.addEventListener("submit", function (event) {
	event.preventDefault();

	const userFullname = event.target.userFullname.value.trim().toLowerCase();
	const userEmail = event.target.userEmail.value.trim().toLowerCase();
	const pass1User = event.target.pass1User.value.trim();
	const pass2User = event.target.pass2User.value.trim();

	if (!userFullname || !userEmail || !pass1User || !pass2User)
		// return printAlert("Todos los campos son necesarios");
		return Swal.fire("Todos los campos son necesarios");

	if (pass1User !== pass2User)
		// return printAlert("las contrasenias no coinciden");
		return Swal.fire("las contrasenias no coinciden");

	dataUsers.push({
        id:crypto.randomUUID,
		userFullname,
		userEmail,
		pass1User,
		pass2User,
	});

    printUsers(dataUsers);    
});

iconClose.addEventListener("click", function () {
	contentModalError.classList.remove("contentModalError__show");
});

printUsers(dataUsers);
