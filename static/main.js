
(function($) {                                          // Compliant with jquery.noConflict()
$.fn.LikeButton = function(o) {
	 o = $.extend({
	       	alreadyVote:false, // Already have a vote?
	 		incUrl:false,	// url to get when need increment counter
	 		decUrl:false,	// url to get when need decrement counter
	    }, o || {});
	 
	
	return this.each(function() {
	
		var div = $(this),
			txt = $('span.name', div),
			num = $('span.cnt', div),
			self = this;
	
		txt.css('cursor', 'pointer');
		txt.click(function(){
			
		var inc=1;
		var url=o.incUrl;	
		// If already voted minus rating
		if (o.alreadyVote)
			{
				inc=-1;
				url=o.decUrl;
			}
			
		// Update in html	
		num.text(parseInt(num.text(),10)+inc);
		o.alreadyVote = !o.alreadyVote;
		
		// Send to server
		if (url) $.ajax(url).done(function (data) {
			if (data != 1)
				{
				$(self).popover({
					content: data,
					animation: true,
					html: true,
					placement: 'top'
				});
				
				$(self).popover('show');
				}
		});
		
		});	
		
	});
};
})(jQuery);