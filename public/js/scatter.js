$(document).ready(function() {
  if(is.desktop()) {
    $('.hero-b').height($(window).height()-$('.hero-a').height() - 10); // hero height
  }
  
  $(".header").pin(); // sticky nav
  $(".share-icons").pin({
    containerSelector: ".article-wrap",
    padding: {
      top: 80,
      bottom: 60
    }
  })
  
  // animated scroll
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.href.substring(this.href.indexOf('#')));
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 1000);
    }
    $('.collapse').collapse('hide');
  });
  
  // newscred style transition
  var el = $('.header-trans');
  var logo = el.find('.logo img');
  var logoSRC = logo.attr('src');
  if(is.desktop()) {
    $(window).on('scroll', function() {
      var scrollAmount = $(this).scrollTop();
      if(scrollAmount > 0) {
        el.removeClass('header-trans');
        logo.attr('src', logoSRC.replace('light','dark'));
      }
      else {
        el.addClass('header-trans');
        logo.attr('src', logoSRC.replace('dark','light'));
      }
    });
  }
  else {
    logo.attr('src', logoSRC.replace('light','dark'));
  }

  // for the customer testimonials
  $('.customer').click(function() {
    $('.customer').removeClass('active');
    $(this).addClass('active');
  });

  // lazy loading images
  $(".network-logo").unveil(200);

});

// thanks page
if(window.location.hash == '#thanks') {
  $('#thanks').show();
}

// popup for share
var openPopup = function(href){
  event.preventDefault();
  var left = (screen.width/2)-(550/2);
  var top = (screen.height/2)-(420/2);
  var windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,centerscreen,width=550,height=420,top='+top+', left='+left;
  window.open(href,'Share', windowOptions);
}
