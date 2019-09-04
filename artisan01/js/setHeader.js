var setHeader = function() {
	var header = document.getElementsByClassName("header")[0];
	var headerTop = document.getElementsByClassName("header__logo_top")[0];
	var headerBottom = document.getElementsByClassName("header__logo_bottom")[0];
	var scrolled = window.pageYOffset;
	if (scrolled > 0) {
		header.classList.add("header__fixed");
		headerTop.classList.add("header__logo_top-scroll");
		headerBottom.classList.add("header__logo_bottom-scroll");
	} else {
		header.classList.remove("header__fixed");
		headerTop.classList.remove("header__logo_top-scroll");
		headerBottom.classList.remove("header__logo_bottom-scroll");
	}
}
window.onscroll = setHeader;
window.onload = setHeader;