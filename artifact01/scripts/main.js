jQuery(function($) {
    var windowWidth = $('body').width();

    /* --- Navigation --- */
    const targetElement = document.querySelector('.gn');
    bodyScrollLock.disableBodyScroll(targetElement);
    bodyScrollLock.enableBodyScroll(targetElement);


    $('.item').on('click', function(e) {
        if($('.gn-trigger').hasClass('is-active')) {
            $('.gn-trigger').removeClass('is-active');
            $('.gn').slideUp();
            bodyScrollLock.enableBodyScroll(targetElement);}
    });
   

    $('.gn-trigger').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $('.gn').slideUp();
            bodyScrollLock.enableBodyScroll(targetElement);
            } else {
                $(this).addClass('is-active');
                $('.gn').slideDown();
                bodyScrollLock.disableBodyScroll(targetElement);
            }
        });

    $(window).resize(function() {
        windowWidth = $('body').width();
        if(windowWidth > 767 && $('.gn-trigger').hasClass('is-active')) {
            setTimeout(function() {
                $('.gn-trigger').removeClass('is-active');
                $('.gn').slideUp(0);
            }, 200);
            bodyScrollLock.enableBodyScroll(targetElement);
        }
    });

    /* --- Accordion --- */
    const accordion = document.getElementsByClassName('accordion-box');

    for (i = 0; i<accordion.length; i++) {
        accordion[i].addEventListener('click', function() {
            this.classList.toggle('active')
        });
    };

    /* --- Lightbox --- */
    var lightbox = new SimpleLightbox('.readers-works-img a', {
        showCounter: true,
        captions: true,
    });

    /* --- Flickity --- */
    $('.main-carousel').flickity({
        pageDots: true,
        autoPlay: 3000,
        prevNextButtons: false,
        cellAlign: 'center',
        contain: true,
      });

});