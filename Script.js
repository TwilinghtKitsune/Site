// JavaScript source code

let bg = 1;
let dayOrNight = 0;
document.getElementById("alienIsolation").checked = true;

let Reloaded = function () {
	sessionStorage.setItem("autosave1", document.getElementById("space").value);
	sessionStorage.setItem("autosave2", document.getElementById("shoot").value);
	sessionStorage.setItem("autosave3", document.getElementById("openWorld").value);
	sessionStorage.setItem("autosave4", document.getElementById("fantasy").value);
	sessionStorage.setItem("autosave5", document.getElementById("firstPerson").value);
	sessionStorage.setItem("autosave6", bg);
	sessionStorage.setItem("autosave7", dayOrNight);
} 

function randomBackground()
{
	bg = Math.floor(Math.random() * (10 - 1) + 1);
	if (dayOrNight == 0) {
		switch (bg) {
			case 1:
				document.body.style.backgroundImage = 'url("bg/AlienIsolation_1.jpeg")';
				document.getElementById("alienIsolation").checked = true;
				break;
			case 2:
				document.body.style.backgroundImage = 'url("bg/Borderlands_1.jpg")';
				document.getElementById("borderlands").checked = true;
				break;
			case 3:
				document.body.style.backgroundImage = 'url("bg/DooM_1.jpg")';
				document.getElementById("doom").checked = true;
				break;
			case 4:
				document.body.style.backgroundImage = 'url("bg/DyingLight_1.jpg")';
				document.getElementById("dyingLight").checked = true;
				break;
			case 5:
				document.body.style.backgroundImage = 'url("bg/Fallout_1.jpg")';
				document.getElementById("fallout").checked = true;
				break;
			case 6:
				document.body.style.backgroundImage = 'url("bg/Paladins_1.jpg")';
				document.getElementById("paladins").checked = true;
				break;
			case 7:
				document.body.style.backgroundImage = 'url("bg/Sacred_1.jpg")';
				document.getElementById("sacred").checked = true;
				break;
			case 8:
				document.body.style.backgroundImage = 'url("bg/Skyrim_1.jpg")';
				document.getElementById("skyrim").checked = true;
				break;
			case 9:
				document.body.style.backgroundImage = 'url("bg/Warface_1.jpg")';
				document.getElementById("warface").checked = true;
				break;
			case 10:
				document.body.style.backgroundImage = 'url("bg/Witcher_1.jpg")';
				document.getElementById("witcher").checked = true;
				break;
		}
	}

	if (dayOrNight == 1) {
		switch (bg) {
			case 1:
				document.body.style.backgroundImage = 'url("bg/AlienIsolation_2.jpg")';
				document.getElementById("alienIsolation").checked = true;
				break;
			case 2:
				document.body.style.backgroundImage = 'url("bg/Borderlands_2.jpg")';
				document.getElementById("borderlands").checked = true;
				break;
			case 3:
				document.body.style.backgroundImage = 'url("bg/DooM_2.jpg")';
				document.getElementById("doom").checked = true;
				break;
			case 4:
				document.body.style.backgroundImage = 'url("bg/DyingLight_2.jpg")';
				document.getElementById("dyingLight").checked = true;
				break;
			case 5:
				document.body.style.backgroundImage = 'url("bg/Fallout_2.jpg")';
				document.getElementById("fallout").checked = true;
				break;
			case 6:
				document.body.style.backgroundImage = 'url("bg/Paladins_2.jpg")';
				document.getElementById("paladins").checked = true;
				break;
			case 7:
				document.body.style.backgroundImage = 'url("bg/Sacred_2.jpg")';
				document.getElementById("sacred").checked = true;
				break;
			case 8:
				document.body.style.backgroundImage = 'url("bg/Skyrim_2.jpg")';
				document.getElementById("skyrim").checked = true;
				break;
			case 9:
				document.body.style.backgroundImage = 'url("bg/Warface_2.jpg")';
				document.getElementById("warface").checked = true;
				break;
			case 10:
				document.body.style.backgroundImage = 'url("bg/Witcher_2.jpg")';
				document.getElementById("witcher").checked = true;
				break;
		}
	}
	Reloaded();
}

function nightOrDay() {
	if (dayOrNight == 1) {
		dayOrNight = 0;
		document.getElementById("forLine").style.backgroundColor = "red";
		document.getElementById("tema").value = 'Тёмная тема';
		document.body.style.color = 'black';
		document.getElementById("main").style.background = 'rgba(255, 255, 255, 0.6)';
		document.getElementById("divInstallation_2").style.background = 'rgb(255, 255, 255)';
		document.getElementById("installation").src = "img/installation.png";
		document.getElementById("divInstallation").style.background = 'rgb(255, 255, 255)';
		document.getElementById("cross").src = "img/cross.png";
		let i;
		for (i = 0; i < 14; i++) {
			document.getElementsByClassName("pInDiv")[i].style.background = 'rgba(255, 255, 255, 0.6)';
		}
	}
	else {
		dayOrNight = 1;
		document.getElementById("forLine").style.backgroundColor = "#0400e8";
		document.getElementById("tema").value = 'Светлая тема';
		document.body.style.color = 'white';
		document.getElementById("main").style.background = 'rgba(20, 20, 20, 0.6)';
		document.getElementById("divInstallation_2").style.background = 'rgb(48, 48, 48)';
		document.getElementById("installation").src = "img/installation_2.png";
		document.getElementById("divInstallation").style.background = 'rgb(48, 48, 48)';
		document.getElementById("cross").src = "img/cross_2.png";
		let i;
		for (i = 0; i < 14; i++) {
			document.getElementsByClassName("pInDiv")[i].style.background = 'rgba(20, 20, 20, 0.6)';
		}
	}
	Background(-1);
	Reloaded();
}

function Background(b) {
	if (b != -1) bg = b;
	Reloaded();
	if (dayOrNight == 0) {
		switch (bg) {
			case 1:
				document.body.style.backgroundImage = 'url("bg/AlienIsolation_1.jpeg")';
				break;
			case 2:
				document.body.style.backgroundImage = 'url("bg/Borderlands_1.jpg")';
				break;
			case 3:
				document.body.style.backgroundImage = 'url("bg/DooM_1.jpg")';
				break;
			case 4:
				document.body.style.backgroundImage = 'url("bg/DyingLight_1.jpg")';
				break;
			case 5:
				document.body.style.backgroundImage = 'url("bg/Fallout_1.jpg")';
				break;
			case 6:
				document.body.style.backgroundImage = 'url("bg/Paladins_1.jpg")';
				break;
			case 7:
				document.body.style.backgroundImage = 'url("bg/Sacred_1.jpg")';
				break;
			case 8:
				document.body.style.backgroundImage = 'url("bg/Skyrim_1.jpg")';
				break;
			case 9:
				document.body.style.backgroundImage = 'url("bg/Warface_1.jpg")';
				break;
			case 10:
				document.body.style.backgroundImage = 'url("bg/Witcher_1.jpg")';
				break;
		}
	}

	if (dayOrNight == 1) {
		switch (bg) {
				case 1:
					document.body.style.backgroundImage = 'url("bg/AlienIsolation_2.jpg")';
					break;
				case 2:
					document.body.style.backgroundImage = 'url("bg/Borderlands_2.jpg")';
					break;
				case 3:
					document.body.style.backgroundImage = 'url("bg/DooM_2.jpg")';
					break;
				case 4:
					document.body.style.backgroundImage = 'url("bg/DyingLight_2.jpg")';
					break;
				case 5:
					document.body.style.backgroundImage = 'url("bg/Fallout_2.jpg")';
					break;
				case 6:
					document.body.style.backgroundImage = 'url("bg/Paladins_2.jpg")';
					break;
				case 7:
					document.body.style.backgroundImage = 'url("bg/Sacred_2.jpg")';
					break;
				case 8:
					document.body.style.backgroundImage = 'url("bg/Skyrim_2.jpg")';
					break;
				case 9:
					document.body.style.backgroundImage = 'url("bg/Warface_2.jpg")';
					break;
				case 10:
					document.body.style.backgroundImage = 'url("bg/Witcher_2.jpg")';
					break;
		}
	}
}

function installation() {
	if (document.getElementById("divInstallation_2").style.display == 'block') document.getElementById("divInstallation_2").style.display = 'none';
	else {
		document.getElementById("divInstallation_2").style.display = 'block';
		document.getElementById("divInstallation_2").style.position = 'fixed'
	}
	Reloaded();
}

window.addEventListener('scroll', function () {
	document.getElementById("forLine").style.right = 100 - (document.body.scrollTop || document.body.parentNode.scrollTop) / (document.body.parentNode.scrollHeight - document.body.parentNode.clientHeight) * 100 + "%";
	if (100 - (document.body.scrollTop || document.body.parentNode.scrollTop) / (document.body.parentNode.scrollHeight - document.body.parentNode.clientHeight) * 100 < 0) document.getElementById("forLine").style.right = "0%";
});

let games = [];

games[1] = {
	name: "AlienIsolation",
	space: "да",
	shoot: "да",
	openWorld: "нет",
	fantasy: "да",
	firstPerson: "да",
}

games[2] = {
	name: "KerbalSpaceProgram",
	space: "да",
	shoot: "нет",
	openWorld: "-",
	fantasy: "-",
	firstPerson: "-",
}

games[3] = {
	name: "EVEOnline",
	space: "да",
	shoot: "да",
	openWorld: "да",
	fantasy: "-",
	firstPerson: "-",
}

games[4] = {
	name: "DyingLight",
	space: "нет",
	shoot: "да",
	openWorld: "да",
	fantasy: "да",
	firstPerson: "да",
}

games[5] = {
	name: "ResidentEvil",
	space: "нет",
	shoot: "да",
	openWorld: "нет",
	fantasy: "да",
	firstPerson: "нет",
}

games[6] = {
	name: "FarCry",
	space: "нет",
	shoot: "да",
	openWorld: "да",
	fantasy: "нет",
	firstPerson: "да",
}

games[7] = {
	name: "Mafia",
	space: "нет",
	shoot: "да",
	openWorld: "да",
	fantasy: "нет",
	firstPerson: "нет",
}

games[8] = {
	name: "RemnantFromTheAshes",
	space: "нет",
	shoot: "да",
	openWorld: "да",
	fantasy: "да",
	firstPerson: "нет",
}

games[9] = {
	name: "Paladins",
	space: "нет",
	shoot: "да",
	openWorld: "нет",
	fantasy: "да",
	firstPerson: "да",
}

games[10] = {
	name: "Skyrim",
	space: "нет",
	shoot: "нет",
	openWorld: "да",
	fantasy: "да",
	firstPerson: "да",
}

games[11] = {
	name: "Witcher",
	space: "нет",
	shoot: "нет",
	openWorld: "да",
	fantasy: "да",
	firstPerson: "нет",
}

games[12] = {
	name: "Portal",
	space: "нет",
	shoot: "нет",
	openWorld: "нет",
	fantasy: "да",
	firstPerson: "да",
}

games[13] = {
	name: "DragonAge",
	space: "нет",
	shoot: "нет",
	openWorld: "нет",
	fantasy: "да",
	firstPerson: "нет",
}

games[14] = {
	name: "Trackmania",
	space: "нет",
	shoot: "нет",
	openWorld: "нет",
	fantasy: "нет",
	firstPerson: "-",
}

function clear() {
	for (i = 1; i < 15; i++) {
		document.getElementById(games[i].name).style.display = "none";
	}
}

function results() {

	clear();

	Reloaded();

	let spa = document.getElementById("space").value;
	let sh = document.getElementById("shoot").value;
	let ope = document.getElementById("openWorld").value;
	let fan = document.getElementById("fantasy").value;
	let fir = document.getElementById("firstPerson").value;

	spa = spa.toLowerCase();
	sh = sh.toLowerCase();
	ope = ope.toLowerCase();
	fan = fan.toLowerCase();
	fir = fir.toLowerCase();

	if ((spa != "да") && (spa != "нет")) spa = "-";
	if ((sh != "да") && (sh != "нет")) sh = "-";
	if ((ope != "да") && (ope != "нет")) ope = "-";
	if ((fan != "да") && (fan != "нет")) fan = "-";
	if ((fir != "да") && (fir != "нет")) fir = "-";

	games[0] = {
		space: spa,
		shoot: sh,
		openWorld: ope,
		fantasy: fan,
		firstPerson: fir,
	}

	let i;

	for (i = 1; i < 15; i++) {
		if (((games[0].space == games[i].space) || (games[0].space == "-") || (games[i].space == "-"))
			&& ((games[0].shoot == games[i].shoot) || (games[0].shoot == "-") || (games[i].shoot == "-"))
			&& ((games[0].openWorld == games[i].openWorld) || (games[0].openWorld == "-") || (games[i].openWorld == "-"))
			&& ((games[0].fantasy == games[i].fantasy) || (games[0].fantasy == "-") || (games[i].fantasy == "-"))
			&& ((games[0].firstPerson == games[i].firstPerson) || (games[0].firstPerson == "-") || (games[i].firstPerson == "-")))
			document.getElementById(games[i].name).style.display = "block";
	}

}

window.onload = function () {
	var loaded = sessionStorage.getItem('loaded');
	if (loaded) {
		document.getElementById("space").value = sessionStorage.getItem("autosave1");
		document.getElementById("shoot").value = sessionStorage.getItem("autosave2");
		document.getElementById("openWorld").value = sessionStorage.getItem("autosave3");
		document.getElementById("fantasy").value = sessionStorage.getItem("autosave4");
		document.getElementById("firstPerson").value = sessionStorage.getItem("autosave5");
		bg = sessionStorage.getItem("autosave6");
		dayOrNight = sessionStorage.getItem("autosave7");
		results();
		Reloaded();
	} else {
		sessionStorage.setItem('loaded', true);
		Reloaded();
	}
}