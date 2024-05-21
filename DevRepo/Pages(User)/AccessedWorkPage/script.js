$(document).ready(function () {
    $(".xp-menubar").on('click', function () {
      if ($('#sidebar').hasClass('active')) {
        // If #sidebar has 'active' class, remove 'active' from both #sidebar and #content
        $('#sidebar').removeClass('active');
        $('#content').removeClass('active');
        $('.secondary-navbar').css('width', '80%');
      } else {
        // If #sidebar does not have 'active' class, add 'active' to both #sidebar and #content
        $('#sidebar').addClass('active');
        $('#content').addClass('active');
        $('.secondary-navbar').css('width', '100%');
      }
    });

    $(document).ready(function () {
      $(".xp-menubar, .body-overlay").on('click', function () {
        if ($('#sidebar').hasClass('show-nav')) {
          // If #sidebar has 'show-nav' class, remove 'show-nav' from both #sidebar and .body-overlay
          $('#sidebar').removeClass('show-nav');
          $('.body-overlay').removeClass('show-nav');
          $('.secondary-navbar').css('width', '100%');
        } else {
          // If #sidebar does not have 'show-nav' class, add 'show-nav' to both #sidebar and .body-overlay
          $('#sidebar').addClass('show-nav');
          $('.body-overlay').addClass('show-nav');
          $('.secondary-navbar').css('width', '100%');
        }
      });
    });

  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $('.xp-breadcrumbbar').outerHeight()) {
      $('#secondaryNavbar').fadeIn();
    } else {
      $('#secondaryNavbar').fadeOut();
    }
  });