// Course population into form
$(function() {
  var CourseButton = $(".course-button");
  $(".course-button").click(function() {
      //debugger;
  var regParam = $(this).attr("price").val();
  var regQuery = jQuery.param( regParam );
  $( regLink ).attr("href", regLink.attr("href") + "?course=" + regParam);
  });
  });