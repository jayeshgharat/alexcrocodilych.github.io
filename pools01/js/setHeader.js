window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
var setHeader = function() {
	var header = document.getElementsByClassName("header")[0];
	var scrolled = window.pageYOffset;
	if (scrolled >= 40) {
		header.classList.add("header__fixed");
	} else {
		header.classList.remove("header__fixed");
	}
}
window.onscroll = setHeader;
window.onload = setHeader;