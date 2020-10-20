$(document).ready(function(){

    const regIn = document.querySelector(".reg-in");
    const regAside = document.querySelector(".reg-side");
    const reg = document.querySelector(".form-reg");
    const close = document.querySelector(".reg-close");
    const wrap = document.querySelector(".wrap-bg");

    regAside.addEventListener("click" , () => {
        reg.style.display = "flex";
        wrap.style.display = "block";
    })

    regIn.addEventListener("click" , () => {
        reg.style.display = "flex";
        wrap.style.display = "block";
    })

    close.addEventListener("click" , () => {
        reg.style.display = "none";
        wrap.style.display = "none";    
    })

    $('#reg').submit(function(){    
        $.post(
            'post.php', 
             $("#login").serialize(),       
        )

        return false;
    });

})