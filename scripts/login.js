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
document.querySelector("#form").addEventListener("submit",mySubmit);
    var user_info = JSON.parse(localStorage.getItem("user_info"));
   
    // console.log(user_info.email)
    // console.log(user_info)
    function mySubmit(){
        event.preventDefault();

        var dataObj = {
            email: form.email.value,
            password: form.password.value
        }
       
        if(user_info == null){
            window.location.href="signup.html"
            alert("Please Create Account");
        }
          
        else if(dataObj.email == user_info.email && dataObj.password == user_info.password)
        {
            localStorage.setItem("signin",JSON.stringify(dataObj));
            window.location.href="index.html";
            alert("Login succesfull");
        }
        else{
            alert("user does not exists");
            
        }

    }
