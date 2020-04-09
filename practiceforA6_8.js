$(document).ready(function(){
	var elem = document.getElementById("my-progress-bar");
	var x=0;
		$("#btn1").click(function(){
		var a=1;
		elem.style.width = (x+a) + "%";
		x=a+x;
		console.log(x);
	})
		$("#btn2").click(function(){
		var b =3;
		elem.style.width = (b+x) + "%";
		x=b+x;
		console.log(x);
	})
		$("#btn3").click(function(){
		var c =7;
		elem.style.width = (c+x) + "%";
		x=c+x;
		console.log(x);
	})

})
