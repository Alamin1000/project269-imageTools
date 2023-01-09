(function ($) {
  "use strict";

  $(".password-field-toggler").click(function () {
    $(this).toggleClass("open");
    $(this).find("i").toggleClass("fa-eye fa-eye-slash");
    var thisInput = $(this).siblings("input");
    if (thisInput.attr("type") == "password") {
      $(thisInput).attr("type", "text");
    } else {
      $(thisInput).attr("type", "password");
    }
  });
})(jQuery);

$(document).ready(function () {
  // nice-select
  $(".nice-select").niceSelect();

  // preloader
  $("#preloader").fadeOut(500);
});
