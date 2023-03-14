let signupbtn= document.getElementById("signupbtn");
let signinbtn= document.getElementById("signinbtn");
let nameField= document.getElementById("nameField");
let title= document.getElementById("title");

signinbtn.onclick=function(){
    nameField.style.maxHeight='0';
    title.innerText="Sign In" ;
    signupbtn.classList.add("disable");
    signinbtn.classList.remove('disable');
}

signupbtn.onclick= function(){
    nameField.style.maxHeight='65px';
    title.innerText="Sign Out";
    signinbtn.classList.add('disable');
    signupbtn.classList.remove('disable');

}