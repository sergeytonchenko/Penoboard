$(document).ready(function() {
    const $menu = $("#my-menu").mmenu({
        navbars: [
            {
               "position": "top",
               "content": [
                  "searchfield"
               ]               
            }
         ],
         navbar: {
            "title": "<div class='mmenu-title'>peno<span>board</span>"
         },
        extensions: ["theme-white", "position-right", "pagedim-black"],        
    });
    const $icon = $("#mmenu-icon");
    const API = $menu.data( "mmenu" );

    $icon.on( "click", function() {
        API.open();
    });


    API.bind( "opened", function() {
       setTimeout(function() {
          $icon.addClass( "is-active" );
       }, 100);

       $icon.on( "click", function() {
          API.close();
       });

   });

   API.bind( "closed", function() {
      setTimeout(function() {
         $icon.removeClass( "is-active" );
      }, 100);

      $icon.on( "click", function() {
         API.open();
      });

   });

});