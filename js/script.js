let share = document.getElementById("share");
let active = document.getElementById("active");

function togg() {
	if (getComputedStyle(active).display != "flex") {
		active.style.display = "flex";
	} else {
		active.style.display = "none";
	}
}
share.onclick = togg;
