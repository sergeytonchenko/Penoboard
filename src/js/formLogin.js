$(document).ready(function(){

    const singIn = document.querySelector(".sign-in");
    const login = document.querySelector(".form-login");
    const close = document.querySelector(".form-close");
    const wrap = document.querySelector(".wrap-bg");

    singIn.addEventListener("click" , () => {
        login.style.display = "flex";
        wrap.style.display = "block";
    })

    close.addEventListener("click" , () => {
        login.style.display = "none";
        wrap.style.display = "none";    
    })

})