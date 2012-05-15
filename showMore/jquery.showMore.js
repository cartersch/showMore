(function( $ ) {
  $.fn.showMore = function(options) {
    
    var settings = $.extend( {
          'link'        : 'javascript:void(0)',
          'styleClass'  : 'showMore',
          'linkText'        : '(more...)'
        }, options);
    
    return this.each(function() {
      var elements, lineHeight, childHeight, 
      elementsHeight, parentElement,
      parentHeight, newHeightMultiplier, hideOverflow;
      
      elements        = $(this).children();
      lineHeight      = parseInt($(this).css('line-height'));
      parentHeight    = $(this).parent().height();
      elementsHeight  = $(this).height();
      
      hideOverflow = function($idx){
        for($idx; $idx < elements.length; $idx++){
          elements.eq($idx).hide();
        }
      }
      
      
      
      if(elementsHeight > parentHeight){
        for($i = 0; $i < elements.length; $i++){
          childHeight = elements.eq($i).height();
          if(childHeight < parentHeight){
            parentHeight = parentHeight - childHeight;
          } else {
            hideOverflow($i + 1);
            lineHeight = parseInt(elements.eq($i).css('line-height'));
            newHeightMultiplier = Math.floor(parentHeight/lineHeight) - 1;
            elements.eq($i).height(newHeightMultiplier * lineHeight);
            $(this).after('<span class="' + settings.styleClass + '"><a href="'+ settings.link +'">'+ settings.linkText +'</a></span>');
            break;
          }
        }
      }

    });

  };
})( jQuery );