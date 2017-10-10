function changeImage(event) {
	var image = event.currentTagret;
	document.getElementById("bigImage").src = image.src;

}
/*function changeImage(event) {

	var src = event.currentTarget.src;

	var newImg = document.createElement("img");

	newImg.src = src;

	var cur = document.getElementById("bigImage").childNodes[1];

	document.getElementById("bigImage").replaceChild(newImg, cur);

}*/
document.querySelector("#p1").addEventListener('click', changeImage);
document.querySelector("#p2").addEventListener('click', changeImage);
document.querySelector("#p3").addEventListener('click', changeImage);
document.querySelector("#p4").addEventListener('click', changeImage);
document.querySelector("#p5").addEventListener('click', changeImage);