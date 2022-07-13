var attempt = 3; 
function validate(){
var username = document.getElementById("usnfill").value;
var password = document.getElementById("passfill").value;
if ( username == "USN" && password == "123"){
alert ("Login successfully");
window.location = "./user.html"; 
return false;
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");

if( attempt == 0){
document.getElementById("usnfill").disabled = true;
document.getElementById("passfill").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}