var fixedNav =document.querySelector('nav');

// window.addEventListener('scroll')
// window.onscroll = function() { ....... }
// document.addEventListener('scroll')

/*
window.addEventListener('scroll', function() {
	var top = window.scrollY 
				|| window.pageYOffset 
				|| document.documentElement.scrollTop 
				|| document.body.scrollTop;

			
	if(top > 50) {
		fixedNav.classList.add('active');	
	} else {
		fixedNav.classList.remove('active');
	}
	

	(top > 50)
		? fixedNav.classList.add('active')
		: fixedNav.classList.remove('active');

 });
*/


/*
var oldVal = 0;

window.addEventListener('scroll', function() {
	var newVal =  window.scrollY 
				|| window.pageYOffset 
				|| document.documentElement.scrollTop 
				|| document.body.scrollTop;	

	if(oldVal - newVal < 0)  {
		fixedNav.classList.add('active');
	} 

	if(oldVal - newVal > 0) {
		fixedNav.classList.remove('active');
	}
	oldVal = newVal;

})
*/




/*
window.addEventListener('wheel', mouseWhellEvt)
window.addEventListener('DOMMouseScroll', mouseWhellEvt);

function mouseWhellEvt(e) {
	var index = e.wheelDelta ? e.wheelDelta : -e.detail;

	(index < 0)
		? fixedNav.classList.add('active')
		: fixedNav.classList.remove('active');
}
*/

// console.log(navigator.userAgent.indexOf('Firefox') !== -1);

var isFirefox = (navigator.userAgent.indexOf('Firefox') !== -1);
var wheelEvt = isFirefox ? "DOMMouseScroll" : 'wheel' ;

window.addEventListener( wheelEvt, mouseWhellEvt);

function mouseWhellEvt(e) {
	var index = e.wheelDelta ? e.wheelDelta : -e.detail;

	(index < 0)
		? fixedNav.classList.add('active')
		: fixedNav.classList.remove('active');

}



























































































