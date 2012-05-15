***Show More JQuery Plugin***

I've run into situations where I have a div with fixed height, but the content filling the div is often variable.  This plugin measures the height of the inner content.  If the height of the content is greater than the fix height of the containing div, it will hide the content an place a 'Show More' (or whatever you want it to say) at the end of the div.

**More than just overflow:hidden**

Setting the css to overflow:hidden will ensure that the containing div will not expand and that your extraneous text will be hidden, but depending line-height and font-size, you may end up seeing half a sentence or the tops of letters.  This plugin ensures that these things are completely hidden.

Once the text is hidden and the link is placed in the content, you will need to decide how you wish to handle the click event.