var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var email = document.getElementById("email");
var password = document.getElementById("password").val();
var confirmPassword = document.getElementById("comfirmPassword").val();
var female = document.getElementById("female")
var male = document.getElementById("male")

function changeRPage(){
    window.location="register.html";
}
function changeLPage(){
    window.location="login.html";
}

function validateTextbox(){
    if(firstName.value.length < 3){
        alert("Names must contain aleast 3 characters");    
        firstName.focus();
        firstName.style.border = "solid red";
        return false;
    }
    else if(lastName.value.length < 3){
        alert("Names must contain aleast 3 characters");
        lastName.focus();
        lastName.style.border = "solid red";
        return false;
    }
    
    if(password != confirmPassword){
        alert("Password does not match");
        return false;
    }
    
    if(female.checked == false && male.checked == false){
        alert("please choose a gender");
        return false;
    }
   
    

    

}