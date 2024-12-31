var  userNameInput=document.getElementById('userName');
var  userEmailInput=document.getElementById('userEmail');
var  userPasswordInput=document.getElementById('userPassword');
var signUpBtn=document.getElementById('signUpBtn');
var alertMassage=document.getElementById('alertMassage');

var userContianer=[];

if(localStorage.getItem('users')!=null){
    userContianer=JSON.parse(localStorage.getItem('users'));
}

function signUp(){

    var data={
        userName:userNameInput.value,
        userEmail:userEmailInput.value,
        userPassword:userPasswordInput.value
    }

    if(userEmailInput.value==''||userNameInput.value==''||userPasswordInput.value==''){
        getAlertMassage('all inputs required','red');
    }else{
        if(checkEmailInput()==true){
            getAlertMassage('email is exist','red')
        }else{
            userContianer.push(data);
            localStorage.setItem('users',JSON.stringify(userContianer));
            clrForm();
            getAlertMassage('succes','green');
        }
                
            
        }
}
function getAlertMassage(text,color){
    alertMassage.classList.replace('d-none','d-block');
    alertMassage.innerHTML=text;
    alertMassage.style.color=color;
}
function clrForm(){
    userNameInput.value=null;
    userEmailInput.value=null;
    userPasswordInput.value=null;
}
function checkEmailInput(){
    for(var i=0;i<userContianer.length;i++){
        if(userContianer[i].userEmail==userEmailInput.value){
            return true;
        }
}
}
function validateInput(element){
    var regex={
        userEmail:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        userPassword:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        
    }
    
    if(regex[element.id].test(element.value)){
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        element.nextElementSibling.classList.replace('d-block','d-none');
        return true; // Input is valid
    } else {
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
        element.nextElementSibling.classList.replace('d-none','d-block');
        return false; // Input is invalid
    }
    
}


signUpBtn.addEventListener('click',signUp)