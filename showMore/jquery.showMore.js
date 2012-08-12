(function( $ ) {
  $.fn.showMore = function(options) {
    
    var settings = $.extend( {
          'link'        : 'javascript:void(0)',
          'styleClass'  : 'showMore',
          'linkText'        : '(more...)'
        }, options);
    
    return this.each(function() {
      var elements, lineHeight, childHeight, 
      elementsHeight, parentElement, showMoreID,
      parentHeight, newHeightMultiplier, hideOverflow;
      
      elements        = $(this).children();
      lineHeight      = parseInt($(this).css('line-height'));
      parentHeight    = $(this).parent().height();
      elementsHeight  = $(this).height();
      
      var hideOverflow = function($idx){
        for($idx; $idx < elements.length; $idx++){
          elements.eq($idx).hide();
        }
      }
      
      
      
      if(elementsHeight > parentHeight){
        for($i = 0; $i < elements.length; $i++){
          childHeight = elements.eq($i).outerHeight(true);
          
          if(childHeight < parentHeight){
            parentHeight = parentHeight - childHeight;
          } else {
            hideOverflow($i + 1);
            lineHeight = parseInt(elements.eq($i).css('line-height'));
            newHeightMultiplier = Math.floor(parentHeight/lineHeight) - 1;
            showMoreID = Math.floor(Math.random(1,1000) * 1000);
            
            
            elements.eq($i).height(newHeightMultiplier * lineHeight);
            elements.eq($i).css({'overflow' : 'hidden'});
            
            $(this).after('<span id="'+ showMoreID +'" class="' + settings.styleClass + '"><a href="'+ settings.link +'">'+ settings.linkText +'</a></span>');
            break;
          }
        }
      }
      
      if(settings.link === 'javascript:void(0)' || settings.link === '#'){
         var that = this;
         $('#' + showMoreID).click(function(){
            var paddingBottom = parseInt($(this).parent().css('padding-bottom')); 
            $(this).parent().height(elementsHeight + (paddingBottom * 2));
            $(that).children().css({
                  'overflow' : 'visible',
                  'height' : 'auto'
                  });
            $(that).children().show();
            $(this).hide();
         });
      }

    });

  };
})( jQuery );