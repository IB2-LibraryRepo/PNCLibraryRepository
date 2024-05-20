$(document).ready(function () {
  // Function to toggle navbar style based on scroll position
  function toggleNavbarStyle() {
    var scrollY = window.scrollY; // Get the vertical scroll position
    var navbar = $('.navbar'); // Get the navbar element

    // Check if scrollY is greater than or equal to 300
    if (scrollY >= 300) {
      navbar.addClass('navbar-scrolled'); // Add the 'navbar-scrolled' class
    } else {
      navbar.removeClass('navbar-scrolled'); // Remove the 'navbar-scrolled' class
    }
  }

  // Call the toggleNavbarStyle function on page load
  toggleNavbarStyle();

  // Call the toggleNavbarStyle function when the window is scrolled
  $(window).scroll(function () {
    toggleNavbarStyle();
  });

  // Redirect to login.html when the login link is clicked
  $('.login-link').click(function (e) {
    e.preventDefault(); // Prevent default link behavior
    window.location.href = '../Login/Login.html'; // Redirect to login.html
  });

  // Toggle overlay class on navbar collapse
  $('#navbarNav').on('show.bs.collapse', function () {
    $(this).addClass('overlay');
  });
  $('#navbarNav').on('hide.bs.collapse', function () {
    $(this).removeClass('overlay');
  });

  // Ensure the page starts at the top and trigger animations on page load
  $(window).on('load', function () {
    // Ensure the page starts at the top
    $('html, body').scrollTop(0);
    // Add classes to trigger animations
    $('.navbar').addClass('navbar-loaded');
    $('.hero-section h1').addClass('hero-loaded');
    $('.hero-section p').addClass('hero-loaded');
    $('.hero-section a').addClass('hero-loaded');
  });
});
