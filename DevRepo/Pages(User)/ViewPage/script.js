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

var selectedCard = JSON.parse(localStorage.getItem("selectedCard"));
if (selectedCard) {
  $("#title").text(selectedCard.title);
  $("#tags").text(selectedCard.tags);
  $("#image").attr("src", selectedCard.image);

  // Initialize view count
  var viewCount = localStorage.getItem("viewCount-" + selectedCard.title) || 0;
  viewCount = parseInt(viewCount) + 1;
  localStorage.setItem("viewCount-" + selectedCard.title, viewCount);
  $("#viewCount").text(viewCount);
}

// Rating system
$(".star").click(function () {
  var rating = $(this).data("value");
  $(".star").each(function (index) {
    if (index < rating) {
      $(this).addClass("checked");
    } else {
      $(this).removeClass("checked");
    }
  });
  localStorage.setItem("rating-" + selectedCard.title, rating);
});

// Retrieve the stored rating
var storedRating = localStorage.getItem("rating-" + selectedCard.title);
if (storedRating) {
  $(".star").each(function (index) {
    if (index < storedRating) {
      $(this).addClass("checked");
    } else {
      $(this).removeClass("checked");
    }
  });
}

$(document).ready(function () {
  // Ensure the secondary navbar is initially visible
  $('#secondaryNavbar').show();

  var selectedCard = JSON.parse(localStorage.getItem("selectedCard"));
  if (selectedCard) {
    $("#title").text(selectedCard.title);
    $("#tags").text(selectedCard.tags);
    $("#image").attr("src", selectedCard.image);

    // Initialize view count
    var viewCount = localStorage.getItem("viewCount-" + selectedCard.title) || 0;
    viewCount = parseInt(viewCount) + 1;
    localStorage.setItem("viewCount-" + selectedCard.title, viewCount);
    $("#viewCount").text(viewCount);

    // Rating system
    $(".star").click(function () {
      var rating = $(this).data("value");
      $(".star").each(function (index) {
        if (index < rating) {
          $(this).addClass("checked");
        } else {
          $(this).removeClass("checked");
        }
      });
      localStorage.setItem("rating-" + selectedCard.title, rating);
    });

    // Retrieve the stored rating
    var storedRating = localStorage.getItem("rating-" + selectedCard.title);
    if (storedRating) {
      $(".star").each(function (index) {
        if (index < storedRating) {
          $(this).addClass("checked");
        } else {
          $(this).removeClass("checked");
        }
      });
    }
  }
});
