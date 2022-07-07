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
    })
});

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});