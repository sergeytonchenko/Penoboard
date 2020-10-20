$(document).ready(function(){

    const singIn = document.querySelector(".sign-in");
    const singAside = document.querySelector(".sign-side");
    const login = document.querySelector(".form-login");
    const close = document.querySelector(".form-close");
    const wrap = document.querySelector(".wrap-bg");

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

    // $('#login').submit(function(){    
    //     $.post(
    //         'post.php', 
    //          $("#login").serialize(),       
    //     )

    //     return false;
    // });

    $('.form-block').validate({
        debug: true,
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
          submitHandler: function(form) {
            $.post('post.php', $(form).serialize(), function (data, textStatus) {
                form.submit();
                alert(data.inf);
            },'json');
           
          }       
      });

})