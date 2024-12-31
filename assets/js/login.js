var emailLoginInput=document.getElementById('emailLogin');
var passwordLoginInput=document.getElementById('passwordLogin');
var loginBtn=document.getElementById('loginBtn');
var userContianer=[];
if(localStorage.getItem('users')!=null){
    userContianer=JSON.parse(localStorage.getItem('users'));
}
function login(){
    if(emailLoginInput.value==''||passwordLoginInput.value==''){
        getAlertMassage('all inputs required','red');
    }else{
        if(checkEmailPassword()==true){
            window.location.href='home.html';

        }else{
            getAlertMassage('email or password not correct','red');
        }
    }

}
function checkEmailPassword(){
    for (let index = 0; index < userContianer.length; index++) {
        if(userContianer[index].userEmail==emailLoginInput.value&& userContianer[index].userPassword==passwordLoginInput.value){
            localStorage.setItem('userName',userContianer[index].userName)
            return true;

        }
        
    }
    
}
function getAlertMassage(text,color){
    alertMassage.classList.replace('d-none','d-block');
    alertMassage.innerHTML=text;
    alertMassage.style.color=color;
}
loginBtn.addEventListener('click',login);