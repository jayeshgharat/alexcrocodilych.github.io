var setHeader = function() {
	var header = document.getElementsByClassName("header")[0];
	var about = document.getElementsByClassName("about")[0];
	var aboutCoor = about.getBoundingClientRect();
	var aboutTop = aboutCoor.top;
	if (aboutTop < 100) {
		header.classList.add("header-fixed");
	} else {
		header.classList.remove("header-fixed");
	}
}
window.onscroll = setHeader;
window.onload = setHeader;