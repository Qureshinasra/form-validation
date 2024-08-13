function validate(){
	var user=document.getElementById('name').value;
	var Password1=document.getElementById('address').value;
	var Password2=document.getElementById('email').value;
	var mobilenumber=document.getElementById('mobile no.').value;
	var email=document.getElementById('password').value;
    var email=document.getElementById('subject').value;
    var email=document.getElementById('comment').value;
    var email=document.getElementById('agree').value;

	console.log(user);	

	// if(name==null || name==""){
	// 	// alert("enter d name");
	// 	document.getElementById('name').innerHTML ="Please fill the username feild";
	// 	return false;
	// }
	// else{
	// 	document.getElementById('name').innerHTML ="";
	// 	return false;
	// }

	if((name.length<=2) || (name.length>=30)){
		// alert("enter d name");
		document.getElementById('name').innerHTML ="Username lenght must be between 3 and 30 ";
		return false;
	}
	else{
		document.getElementById('name').innerHTML ="";
		return false;
	}

	if(!isNaN(name)){
		// alert("enter d name");
		document.getElementById('name').innerHTML ="only character is allowed ";
		return false;
	}
	else{
		document.getElementById('name').innerHTML ="";
		return false;
	}

	// if(Password1==null || Password1==""){
		// alert("enter d username");
		// document.getElementById('pass1').innerHTML ="Please fill the Password feild";
		// return false;
	// }
	// // else{
	// 	document.getElementById('pass1').innerHTML ="";
	// 	return false;
	// }

	// if(Password1.length<=5 || Password1.length>=20){
	// 	// alert("enter d username");
	// 	document.getElementById('pass1').innerHTML ="Password lenght must be between 5 and 20";
	// 	return false;
	// }
// 	// else{
// 	// 	document.getElementById('pass1').innerHTML ="";
// 	// 	return false;
// 	// }

// 	if(Password1!=Password2){
// 		// alert("enter d username");
// 		document.getElementById('pass2').innerHTML ="Password are not matching please enter correct password";
// 		return false;
// 	}
// 	// else{
// 	// 	document.getElementById('pass2').innerHTML ="";
// 	// 	return false;
// 	// }


// 	if(Password2==null || Password2==""){
// 		// alert("enter d username");
// 		document.getElementById('pass2').innerHTML ="Please fill the Confirm Password feild";
// 		return false;
// 	}
// 	// else{
// 	// 	document.getElementById('pass2').innerHTML ="";
// 	// 	return false;
// 	// }

// 	if(mobilenumber==null || mobilenumber==""){
// 		// alert("enter d username");
// 		document.getElementById('mobileno').innerHTML ="Please fill the mobilenumber feild";
// 		return false;
// 	}
// 	// else{
// 	// 	document.getElementById('mobileno').innerHTML ="";
// 	// 	return false;
// 	// }


// 	if(isNaN(mobilenumber)){
// 		// alert("enter d username");
// 		document.getElementById('mobileno').innerHTML ="mobile number should be in digits";
// 		return false;
// 	}
// 	// else{
// 	// 	document.getElementById('mobileno').innerHTML ="";
// 	// 	return false;
// 	// }

// 	if(mobilenumber.length!=10){
// 		// alert("enter d username");
// 		document.getElementById('mobileno').innerHTML ="mobile number should be in 10 digits not more or less than 10.";
// 		return false;
// 	}
// 	// else{
// 	// 	document.getElementById('mobileno').innerHTML ="";
// 	// 	return false;
// 	// }


// 	if(email==null || email==""){
// 		// alert("enter d username");
// 		document.getElementById('emailid').innerHTML ="Please fill the email feild";
// 		return false;
// 	}
// 	// else{
// 	// 	document.getElementById('emailid').innerHTML ="";
// 	// 	return false;
// 	// }


//   if(email.indexOf('@') <= 0){
//     // alert("enter d username");
//     document.getElementById('emailid').innerHTML ="@ indvalid position";
//     return false;
//   }
//  //  else{
// 	// 	document.getElementById('emailid').innerHTML ="";
// 	// 	return false;
// 	// }

//   if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")){
//     // alert("enter d username");
//     document.getElementById('emailid').innerHTML =" . invalid position";
//     return false;
//   }
//  //  else{
// 	// 	document.getElementById('emailid').innerHTML ="";
// 	// 	return false;
// 	// }
// return true;
}