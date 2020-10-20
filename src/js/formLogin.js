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
              minlength: 8,
            }
          },
          messages: {            
            user_email: 'Enter a valid email',
            psword: 'Password must be atleast 8 characterslong'            
          },          
          invalidHandler: function(form, validator) {
            
            var errors = validator.numberOfInvalids();
            if (errors) {
              var message = errors == 1
                ? 'You missed 1 field. It has been highlighted'
                : 'You missed ' + errors + ' fields. They have been highlighted';
              $("div.error span").html(message);
              $("div.error").show();
            } else {
              $("div.error").hide();
            }
          },                
          submitHandler: function() {
           alert('Вы успешно вошли');
          }       
      });

})