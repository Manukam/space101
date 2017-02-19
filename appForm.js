
	function appForm(){
		var q;
		q = document.getElementById("tarea").value;
		if(q.length  > 0){
				document.getElementById("check4").innerHTML = "<p class ='right'> &#10004;</p>";
		}else {
			document.getElementById("check4").innerHTML = "<p class ='wrong'>&#10006; </p>";
		}
		var n = document.getElementById("name").value;
		if(n.length  > 0){
			document.getElementById("check1").innerHTML = "<p class ='right'> &#10004;</p>";
		}else {
			document.getElementById("check1").innerHTML = "<p class ='wrong'>&#10006; </p>";
		}
		var country;
		country = document.getElementById("country").value;
		if(country.length >0){
				document.getElementById("check3").innerHTML = "<p class ='right'> &#10004;</p>";
		}else {
			document.getElementById("check3").innerHTML = "<p class ='wrong'>&#10006; </p>";
		}
		var a;
		a = document.getElementById("address").value;
		if(a.length > 0){
			document.getElementById("check2").innerHTML = "<p class ='right'> &#10004;</p>";
		}else {
			document.getElementById("check2").innerHTML = "<p class ='wrong'>&#10006; </p>";
		}

			
		if(q !== "" && n !== "" && country !== "" && a !==""){
		var response = confirm("Question: \n" + q + "\n From: \n"+" "+ n +" \n "+ country +" \n Email Address: "+a);
		if(response == true){
			alert("Thank you for interacting with us! We will answer your question as soon as possible!!");;
		}
		}else {
			alert("Fill the form correctly");
		}
		
		}
	function erase(){
			document.getElementById("form").reset();
			document.getElementById("check1").innerHTML = "";
			document.getElementById("check2").innerHTML = "";
			document.getElementById("check3").innerHTML = "";
			document.getElementById("check4").innerHTML = "";
	}
		function imagefunction() {
		var largeImage = document.getElementById("pic1");
	   largeImage.style.display = "block";
	   var url=largeImage.getAttribute("src");
	   window.open(url,"Image",'width=largeImage.stylewidth,height=largeImage.style.height,resizable=1,titlebar = {no}');
	}
	function imagefunction1() {
		var largeImage = document.getElementById("pic2");
	   largeImage.style.display = "block";
	   var url=largeImage.getAttribute("src");
	   window.open(url,"Image",'width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
	}
	function imagefunction2() {
		var largeImage = document.getElementById("pic3");
	   largeImage.style.display = "block";
	   var url=largeImage.getAttribute("src");
	   window.open(url,"Image",'width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
	}
	function imagefunction3() {
		var largeImage = document.getElementById("pic4");
	   largeImage.style.display = "block";
	   var url=largeImage.getAttribute("src");
	   window.open(url,"Image",'width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
	}
	function signup(){
		var usern = document.getElementById("user_name").value;
		 document.getElementById("guest").innerHTML = "My Profile: " +usern;
	}
