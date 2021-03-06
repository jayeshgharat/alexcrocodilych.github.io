window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
var setHeader = function() {
	var header = document.getElementsByClassName("header")[0];	
	var headerTop = document.getElementsByClassName("header__logo_picture")[0];
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