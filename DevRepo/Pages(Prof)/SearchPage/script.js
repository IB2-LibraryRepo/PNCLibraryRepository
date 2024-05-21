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

  $(document).ready(function () {
    // Load card data from JSON file
    $.getJSON("/DevRepo/Data/cards.json", function (data) {
      // Store the loaded data
      var cards = data;

      // Display all cards initially
      displayCards(cards);

      // Search functionality
      $("#searchInput").on("input", function () {
        var searchTerm = $(this).val().toLowerCase();
        var filteredCards = filterCards(cards, searchTerm);
        displayCards(filteredCards);
      });
    });

    // Function to filter cards
    function filterCards(cards, searchTerm) {
      return cards.filter(function (card) {
        return card.title.toLowerCase().includes(searchTerm) || card.tags.toLowerCase().includes(searchTerm);
      });
    }

    // Function to display cards
    function displayCards(cards) {
      $("#booksContainer").empty();
      $.each(cards, function (index, card) {
        var cardHTML = '<div class="col-lg-4 col-md-6 mb-4 d-flex">' +
          '<div class="card w-100">' +
          '<img class="card-img-top" src="' + card.image + '" alt="' + card.title + '" style="height: 150px; object-fit: cover;">' +
          '<div class="card-body d-flex flex-column">' +
          '<h5 class="card-title">' + card.title + '</h5>' +
          '<div class="card-tags">' + card.tags + '</div>' +
          '<button class="btn btn-outline-success mt-auto view-button" data-title="' + card.title + '" data-tags="' + card.tags + '" data-image="' + card.image + '">View Works</button>' +
          '</div>' +
          '</div>' +
          '</div>';
        $("#booksContainer").append(cardHTML);
      });

      // Add event listener to view buttons
      $(".view-button").click(function () {
        // Store the selected card's information in local storage
        var selectedCard = {
          title: $(this).data("title"),
          tags: $(this).data("tags"),
          image: $(this).data("image")
        };
        localStorage.setItem("selectedCard", JSON.stringify(selectedCard));
        // Redirect to view.html
        window.location.href = "/DevRepo/Pages(Prof)/ViewPage/View.html";
      });
    }
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $('.xp-breadcrumbbar').outerHeight()) {
      $('#secondaryNavbar').fadeIn();
    } else {
      $('#secondaryNavbar').fadeOut();
    }
  });
});
