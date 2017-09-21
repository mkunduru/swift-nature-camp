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
});


