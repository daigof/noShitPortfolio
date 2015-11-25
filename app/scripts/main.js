(function() {

  $('.next-section').on('click', function() {
    var $arrow = $(this),
      offset = 0;

    if (!$arrow.parent().hasClass('contact')) {
      offset = $arrow.parent().next().offset().top;
    }

    smoothScrolling(offset);


  });

  $('.section-links').on('click', function(e) {
    e.preventDefault();
    var $link = $(this),
      offset = 0,
      sectionSelector = '.' + $link.text().toLowerCase();
    offset = $(sectionSelector).offset().top;
    smoothScrolling(offset);


  });

  function smoothScrolling(offset) {
    $('html, body').animate({
      scrollTop: offset
    }, 500);
  }


}());
