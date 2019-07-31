var setHeader = function() {
	var header = document.getElementsByClassName("logo__link")[0];	
	var scrolled = window.pageYOffset;
	if (scrolled > 0) {
		header.classList.add("logo__link-small");
	} else {
		header.classList.remove("logo__link-small");
	}
}
window.onscroll = setHeader;
window.onload = setHeader;