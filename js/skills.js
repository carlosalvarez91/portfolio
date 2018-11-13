$( document ).ready(function() {
    // Main variables
      var $aboutTitle = $('.about-myself .content-skills h2');
      var $developmentWrapper = $('.development-wrapper');
      var developmentIsVisible = false;
  
  
  
    $(window).scroll( function(){
  
      var bottom_of_window = $(window).scrollTop() + $(window).height();
  
      if( bottom_of_window > ($aboutTitle.offset().top + $aboutTitle.outerHeight())){
        $('.about-myself .content-skills h2').addClass('aboutTitleVisible');
      }
        
    /*###### SKILLS SECTION ######*/
  
      var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;
  
      if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){
  
        $('.skills-bar-container li').each( function(){
  
          var $barContainer = $(this).find('.bar-container');
          var dataPercent = parseInt($barContainer.data('percent'));
          var elem = $(this).find('.progressbar');
          var percent = $(this).find('.percent');
          var width = 0;
  
          var id = setInterval(frame, 30);
  
          function frame() {
            if (width >= dataPercent) {
                clearInterval(id);
            } else {
              width++;
              elem.css("width", width+"%");
              percent.html(width+" %");
            }
          }
        });
        developmentIsVisible = true;
      }
    }); // -- End window scroll --
  });