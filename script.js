function validate(){
	var user=document.getElementById('user').value;
	var Password1=document.getElementById('address').value;
	var Password2=document.getElementById('email').value;
	var mobilenumber=document.getElementById('mobile no.').value;
	var email=document.getElementById('password').value;
    var email=document.getElementById('subject').value;
    var email=document.getElementById('comment').value;
    var email=document.getElementById('agree').value;

	console.log(user);	
}
	if(user==null || user==""){
		// alert("enter d username");
		document.getElementById('uname').innerHTML ="please filed the username";
		return false;
	}
	else{
		document.getElementById('uname').innerHTML ="";
		return false;
	}
	