
function validate(){
var username = document.getElementsByClassName('usnfill').value;
var password = document.getElementsByClassName('passfill').value;
if ( username == "1111" && password == "1111"){
alert ('Login successfully');
window.location.href = "file:///D:/vscode/student_data_form/user.html";

}
else{
    alert('Login Failed');
}
}