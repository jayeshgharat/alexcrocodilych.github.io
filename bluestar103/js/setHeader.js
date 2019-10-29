var setHeader = function() {
	var header = document.getElementsByClassName("header")[0];	
	var headerTop = document.getElementsByClassName("header__logo_image")[0];
	var scrolled = window.pageYOffset;
	if (scrolled > 0) {
		header.classList.add("header__fixed");
		headerTop.classList.add("header__logo_fixed");
	} else {
		header.classList.remove("header__fixed");
		headerTop.classList.remove("header__logo_fixed");
	}
}
window.onscroll = setHeader;
window.onload = setHeader;