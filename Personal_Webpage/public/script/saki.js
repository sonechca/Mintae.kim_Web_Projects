function validateLogin(){
    clearError();
    return validateFirstname() && validateLastname() && validatePassword() && validateBname() && checkSelect();
}

function validateFirstname(){
    var errors = document.querySelector("#errFname");
    var inputValue = document.login.fname.value.trim();
    if(inputValue.length == 0){
        errors.innerHTML = "<span>Enter your name</span>"
        return false;
    }
    if((inputValue.charAt(0) != 's' || inputValue.charAt(0) != 'S') && inputValue.charAt(1) != 'a' && inputValue.charAt(2) != 'k' && inputValue.charAt(3) != 'i'){
        errors.innerHTML = "<span>Enter your First name</span>"
        return false;
    }
    return true;
}

function validateLastname(){
    var errors = document.querySelector("#errLname");
    var inputValue = document.login.lname.value.trim();
    if(inputValue.length == 0){
        errors.innerHTML = "<span>Enter your name</span>"
        return false;
    }
    if((inputValue.charAt(0) != 's' || inputValue.charAt(0) != 'S') && inputValue.charAt(1) != 'e' && inputValue.charAt(2) != 'r' && inputValue.charAt(3) != 'i' && inputValue.charAt(4) != 't' && inputValue.charAt(5) != 'a'){
        errors.innerHTML = "<span>Enter your Last name</span>"
        return false;
    }
    return true;
}

function validatePassword(){
    var errors = document.querySelector("#errPword");
    var inputValue = document.login.pword.value.trim();
    var patt = /^180703$/
  
    if(parseInt(inputValue) != inputValue || inputValue.length != 6){
        errors.innerHTML = "<span>Enter Only 6 digits</span>"
        return false;
    }
    if(!inputValue.match(patt)){
        errors.innerHTML = "<span>Hint:Our first day</span>"
        return false;
    }
    return true;
}

function validateBname(){
    var errors = document.querySelector("#errBname");
    var inputValue = document.login.bname.value.trim();
    if(inputValue.length == 0){
        errors.innerHTML = "<span>Enter your Boy frined name</span>"
        return false;
    }
    if((inputValue.charAt(0) != 'm' || inputValue.charAt(0) != 'M') && inputValue.charAt(1) != 'i' && inputValue.charAt(2) != 'n' && inputValue.charAt(3) != 't' && inputValue.charAt(4) != 'a' && inputValue.charAt(5) != 'e'){
        errors.innerHTML = "<span>Enter your boy friend first name</span>"
        return false;
    }
    return true;
}
function checkSelect() {
    var errors = document.querySelector("#errCheck");
    var checkNum = document.login.saki.length;
    var count = 0;
    for(var i = 0; i < checkNum; i++){
        if(document.login.saki[i].checked == true){
            count++;
        }
    }
    if(count != 5){
        errors.innerHTML = "<span>Check the correct box</span>"
        return false
    }
    return true;
}
function clearError(){
    document.querySelector("#errFname").innerHTML = "";
}