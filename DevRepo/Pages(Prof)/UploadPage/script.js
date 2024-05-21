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

$(document).ready(function () {

  // Function to reset the file preview
  function resetFilePreview() {
    $('#filePreview').empty();
  }

  // Function to handle form submission
  $('#uploadForm').submit(function (event) {
    event.preventDefault();

    // Validation - Check if title, tags, and file are not empty
    var title = $('#uploadTitle').val().trim();
    var tags = $('#uploadTags').val().trim();
    var file = $('#uploadFile').prop('files')[0];

    if (title === '' || tags === '' || !file) {
      $('#errorModal').modal('show');
      return;
    }

    // If validation passes, show success modal and reset the form
    $('#successModal').modal('show');
    this.reset();
    resetFilePreview();
  });

  // Function to preview the selected file
  $('#uploadFile').change(function () {
    var file = $(this).prop('files')[0];
    var filePreview = $('#filePreview');

    // Clear previous preview
    filePreview.empty();

    if (file) {
      var reader = new FileReader();

      // Read file as data URL
      reader.readAsDataURL(file);

      // When file reading is done
      reader.onloadend = function () {
        var img = $('<img>').attr('src', reader.result).addClass('img-fluid');
        filePreview.append(img);
      };
    }
  });
});

// Function to preview the selected file
function previewFile() {
  var fileInput = document.getElementById('uploadFile');
  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    var filePreview = $('#filePreview');
    filePreview.empty(); // Clear previous preview

    if (file.type.includes('image')) {
      // If file is an image, display image preview
      filePreview.html('<img src="' + reader.result + '" class="img-fluid" alt="File Preview">');
    } else {
      // If file is not an image, display file name
      filePreview.html('<p>' + file.name + '</p>');
    }
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}
