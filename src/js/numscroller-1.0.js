/**
* jQuery scroroller Plugin 1.0
*
* http://www.tinywall.net/
* 
* Developers: Arun David, Boobalan
* Copyright (c) 2014 
*/
(function($){
    $(document).ready(function(){
        $('body').prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>" );
        $(document).rollerInit();
        $('.numscroller').scrollzip({
            showFunction    :   function() {
                                    numberRoller($(this).attr('data-slno'));
                                },
            wholeVisible    :     false,
        });
    });
    $(document).on("scroll resize", function(){
        $('.numscroller').scrollzip({
            showFunction    :   function() {
                                    numberRoller($(this).attr('data-slno'));
                                },
            wholeVisible    :     false,
        });
    });
    $.fn.rollerInit=function(){
        var i=0;
        $('.numscroller').each(function() {
            i++;
           $(this).attr('data-slno',i); 
           $(this).addClass("roller-title-number-"+i);
        });        
    };
    $.fn.scrollzip = function(options){
        var settings = $.extend({
            showFunction    : null,
            hideFunction    : null,
            showShift       : 0,
            wholeVisible    : false,
            hideShift       : 0,
        }, options);
        return this.each(function(i,obj){
            $(this).addClass('scrollzip');
            if ( $.isFunction( settings.showFunction ) ){
                if(
                    !$(this).hasClass('isShown')&&
                    ($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.showShift)>($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))&&
                    ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))<($(this).outerHeight()+$(this).offset().top-settings.showShift)
                ){
                    $(this).addClass('isShown');
                    settings.showFunction.call( this );
                }
            }
            if ( $.isFunction( settings.hideFunction ) ){
                if(
                    $(this).hasClass('isShown')&&
                    (($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.hideShift)<($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))||
                    ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))>($(this).outerHeight()+$(this).offset().top-settings.hideShift))
                ){
                    $(this).removeClass('isShown');
                    settings.hideFunction.call( this );
                }
            }
            return this;
        });
    };
    function numberRoller(slno){
            var min=parseInt($('.roller-title-number-'+slno).attr('data-min'));
            var max=parseInt($('.roller-title-number-'+slno).attr('data-max'));
            var timediff=parseInt($('.roller-title-number-'+slno).attr('data-delay'));
            var increment=parseInt($('.roller-title-number-'+slno).attr('data-increment'));
            var numdiff=max-min;
            var timeout=(timediff*1000)/numdiff;
            //if(numinc<10){
                //increment=Math.floor((timediff*1000)/10);
            //}//alert(increment);
            numberRoll(slno,min,max,increment,timeout);
            
    }
    function numberRoll(slno,min,max,increment,timeout){//alert(slno+"="+min+"="+max+"="+increment+"="+timeout);
        
        function num(min) {
            let numStr = String(min);
            let newCount1;
            let newCount2;
            let newCount3;
            let num;
            if (min < 1000) {
                return numStr;
            } else if (min >= 1000 && min < 10000 ) {                
                newCount1 = numStr.slice(0, 1);
                newCount2 = numStr.slice(1, 5);
                num = newCount1 + ' ' + newCount2;
            } else if (min >= 10000 && min < 100000 ) {                
                newCount1 = numStr.slice(0, 2);
                newCount2 = numStr.slice(2, 6);
                num = newCount1 + ' ' + newCount2;
            } else if (min >= 100000 && min < 1000000 ) {                
                newCount1 = numStr.slice(0, 3);
                newCount2 = numStr.slice(3, 7);
                num = newCount1 + ' ' + newCount2;
            } else if (min >= 1000000 && min < 10000000 ) {                
                newCount1 = numStr.slice(0, 1);
                newCount2 = numStr.slice(1, 4);
                newCount3 = numStr.slice(4, 7);
                num = newCount1 + ' ' + newCount2 + ' ' + newCount3;
            }                         
            return num;            
        }

    
        if(min<=max){
            $('.roller-title-number-'+slno).html(num(min));
            min=parseInt(min)+parseInt(increment);
            setTimeout(function(){numberRoll(eval(slno),eval(min),eval(max),eval(increment),eval(timeout))},timeout);
        }else{
            $('.roller-title-number-'+slno).html(num(max));
        }
    }
})(jQuery);
