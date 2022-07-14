
function validate(){
var username = document.getElementById("usn").value;
var password = document.getElementById("password").value;
if ( usn == "USN" && password == "123"){
alert ("Login successfully");
window.location.href="./user.html"
document.login.submit();
return false;
}
else{
    alert('Login Failed');
}
}