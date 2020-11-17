
function validateForm() {
var fname = document.getElementById("firstName").value;
if (fname == "") {
  alert("First Name must be entered");
  return false;
}
var lname=document.getElementById("lastName").value;
if (lname == "") {
  alert("Last Name must be entered");
  return false;
}
var dob=document.getElementById("dob").value;
if(dob==""){
  alert("Date of Birth must be entered");
  return false;
}
var email = document.getElementById("email").value;
if (email == "") {
  alert("Email address must be entered");
  return false;
}
var phonenum = document.getElementById("phonenum").value;
if (phonenum == "") {
  alert("Phone number must be entered");
  return false;
}
}
