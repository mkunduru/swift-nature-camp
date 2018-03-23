$(document).ready(function() {
    $('.menu-link').on('click', function(){
        if($('.menu-slide').hasClass('open')) {
          $('.menu-slide').slideUp().removeClass('open');
        }
        else {
          $('.menu-slide').slideDown().addClass('open');
        }
    });

    function close_accordion_section() {
        arrow_close($('.faq__header.active').find('.faq__arrow'));
        $('.faq__header.active').next().slideUp(300).removeClass('open');
        $('.faq__header').removeClass('active');
    }

    function arrow_open(element) {
        element.removeClass('turn-back').addClass('turn');
    }

    function arrow_close(element) {
        element.removeClass('turn').addClass('turn-back');
    }

    $('.faq__header').click(function(e){
        var currentAttrValue = $(this).find('.faq__question').attr('href');

        if($(this).hasClass('active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            $(this).addClass('active');
            arrow_open($(this).find('.faq__arrow'));
            $(currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });

//    var getUrlParameter = function getUrlParameter(sParam) {
//        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
//            sURLVariables = sPageURL.split('&'),
//            sParameterName,
//            i;
//
//        for (i = 0; i < sURLVariables.length; i++) {
//            sParameterName = sURLVariables[i].split('=');
//
//            if (sParameterName[0] === sParam) {
//                return sParameterName[1] === undefined ? true : sParameterName[1];
//            }
//        }
//    };
//
//    console.log("Got here before the call");
//    var camp = getUrlParameter('camp');
//    console.log("camp: "+camp);
//    if(camp == "discovery") {
//        $('.contact-subject').val("I am interested to know more about the discovery camp");
//    }
//
//    $('.camps .button').on('click', function(){
//        var data = $(this).attr('data-camp');
//        window.location.replace("contact.html?camp="+data+"#contactus");
//    })

        $('#contactus .button').on('click', function(){
            $('#contactus input').val("");
            $('#contactus textarea').val("");
            window.location.replace("contact.html#contactus");
        });
});


