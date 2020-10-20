$(document).ready(function(){

    let singIn = document.querySelector(".sign-in");
    let singAside = document.querySelector(".sign-side");
    let login = document.querySelector(".form-login");
    let close = document.querySelector(".form-close");
    let wrap = document.querySelector(".wrap-bg");

    singAside.addEventListener("click" , () => {
        login.style.display = "flex";
        wrap.style.display = "block";
    })

    singIn.addEventListener("click" , () => {
        login.style.display = "flex";
        wrap.style.display = "block";
    })

    close.addEventListener("click" , () => {
        login.style.display = "none";
        wrap.style.display = "none";    
    })

    $('#login').validate({
        debug: false,
        validClass: "success",                    
        rules: {                        
            user_email: {
              required: true,
              email: true,
            },
            psword: {
              required: true,
              minlength: 6,
            }
          },
          messages: {            
            user_email: 'Введите корректный email',
            psword: 'Пароль должен содержать не менее 6 символов'            
          },            
          success: "valid",                
          submitHandler: function() {              
              alert ("Вы успешно вошли"); 
              login.style.display = "none"; 
              wrap.style.display = "none";   
          }       
      });
})