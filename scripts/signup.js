document.querySelector("#home").addEventListener("click",homeClick);
document.querySelector("#login").addEventListener("click",myLogin);
document.querySelector("button").addEventListener("click",mySignup);
function homeClick(){
    window.location.href="index.html"
}
function myLogin(){
    window.location.href="login.html"
}
function mySignup(){
    window.location.href="signup.html"
}
document.querySelector("#form").addEventListener("submit",myClick);
 

function myClick(){
    event.preventDefault();
   var dataObj={
        name:form.name.value,
        contact:form.contact.value,
        email:form.email.value,
        password:form.password.value
    }
    localStorage.setItem("user_info",JSON.stringify(dataObj))
    window.location.href="login.html"
}
