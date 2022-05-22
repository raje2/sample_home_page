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
// slide function start here


document.querySelector("#Submit").addEventListener("click", myClick)

function myClick(){
let image= document.querySelector("#image_url").value;
let images= JSON.parse(localStorage.getItem('images')) || [];

images.push(image);

localStorage.setItem("images",JSON.stringify(images));
document.getElementById("image_url").value=null;


}

// sliding start here
let i=0;
 
document.querySelector("#Start").addEventListener("click",myStart)
let images_x= JSON.parse(localStorage.getItem('images')) || [];
function myStart(){
let slideshow=document.getElementById("slideshow");

i=i+1;
setInterval(function(){
    let image=images_x[i]
    
    if(i===images_x.length-1){
        i=0
    }
   slideshow.innerHTML=null;
    let img= document.createElement("img")
    img.src=image;
    img.style.width="100%"
    img.style.height="400px"
    slideshow.append(img)

    i++;

},3000);
}