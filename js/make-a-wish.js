const prefixes = [
	"I wish you",
	"I hereby, whishes you",
	"Wishing you",
	"Wishin' UwU"
];
const wishes = [
	"a successful life!",
	"happiness!",
	"a successful career!",
	"luck, and fortune!"
];
function random_word (dict) {
	return dict[Math.round(Math.random() * (dict.length - 1))];
}
function wish () {
	return `${random_word(prefixes)} ${random_word(wishes)}`;
}

document.getElementById("wishes").innerHTML = wish();
document.getElementById("rewish").addEventListener("click", function() {
	document.getElementById("wishes").innerHTML = wish();
})

window.addEventListener("load", function() {
	let opacity = 1;
	let target = new Date(2022, 7, 22);
	if (new Date() < target) {
		setInterval(function() {
			let timeDelta = new Date(target - new Date());
			let time = {
				day: timeDelta.getDate() - 1,
				hour: timeDelta.getHours(),
				minute: timeDelta.getMinutes(),
				second: timeDelta.getSeconds()
			};
			document.getElementById("loading").innerHTML = `
				<div class="center">
					<h1 style="font-size:50px;">404</h1>
					<span>
						${
							time.day + time.hour + time.minute > 0 ?
								`${time.day} days - ${time.hour} hours - ${time.minute} minutes`
							: (
								time.second > 0 ?
									`${time.second} seconds`
								: location.reload()
							)
						}
					</span>
				</div>
			`;
		}, 1000);
		document.getElementsByClassName("main-content-container")[0].remove();
		document.getElementsByTagName("canvas")[0].remove();
		return;
	}
	let intrv = setInterval(function () {
		opacity -= 0.1;
		document.getElementById("loading").style.opacity = opacity;
		if (opacity > 0) { return ; }
		clearInterval(intrv);
		document.title = "HBD, P'Nuko!";
		console.clear();
		console.log(
			"%c1%c3%c3%c7%c Made with ❤️, by Airgeddon1337. %c ",
			"background:#D7B165;color:#D7B165;",
			"background:#5C7FA2;color:#5C7FA2;",
			"background:#A06D97;color:#A06D97;",
			"background:#A64851;color:#A64851;",
			"background:#29364F;",
			"background:#5E6F8F;"
		);
		document.getElementById("loading").remove();
	}, 10);
});
