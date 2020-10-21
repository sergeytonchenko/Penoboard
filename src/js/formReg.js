$(document).ready(function(){

    let regIn = document.querySelector(".reg-in");
    let regAside = document.querySelector(".reg-side");
    let reg = document.querySelector(".form-reg");
    let close = document.querySelector(".reg-close");
    let wrap = document.querySelector(".wrap-bg");

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

    $('#reg').validate({
        debug: false,
        validClass: "success",                    
        rules: { 
            name: {
                required: true,
                minlength: 4
            },                       
            user_email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            },
            conf_password: {
                required: true, 
                equalTo: "#password",
                minlength: 6                
           }
        },
        messages: {
            name: 'Логин должен содержать не менее 4 символов',              
            user_email: 'Введите корректный email',
            password: 'Пароль должен содержать не менее 6 символов',
            conf_password: 'Введите правильный пароль'            
        },
        success: "valid",                
        submitHandler: function() {              
            alert ("Вы успешно зарегистрировались"); 
            reg.style.display = "none";
            wrap.style.display = "none";    
        }
    });
})