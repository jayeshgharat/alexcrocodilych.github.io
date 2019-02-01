var setHeader = function() {
	var header = document.getElementsByClassName("header__bottom")[0];
	var scrolled = window.pageYOffset;
	if (scrolled >= 40) {
		header.classList.add("header__fixed");
	} else {
		header.classList.remove("header__fixed");
	}
}
window.onscroll = setHeader;
window.onload = setHeader;