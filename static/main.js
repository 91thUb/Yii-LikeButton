
(function($) {                                          // Compliant with jquery.noConflict()
$.fn.LikeButton = function(o) {
	 o = $.extend({
	       	alreadyVote:false, // Already have a vote?
	 		incUrl:false,	// url to get when need increment counter
	 		decUrl:false,	// url to get when need decrement counter
	 		OnClickPopoverText:false,
	 		count:0,
	    }, o || {});
	 
	
	return this.each(function() {
	
		
		var div = $(this),
			txt = $('span.name', div),
			num = $('span.cnt', div),
			self = this;
	
		txt.css('cursor', 'pointer');
		txt.click(function(){
			/*
			if (o.OnClickPopoverText)
				{
				o.OnClickPopoverText = $("<div/>").html(o.OnClickPopoverText);
				
				$(self).popover({
					content: o.OnClickPopoverText,
					animation: true,
					html: true,
					placement: 'top',
					delay: { show: 500, hide: 100 }
					
				});
				$(self).popover('togle');
				}
			*/
			
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
				num.text(o.count);
				var text=data;
				/*if (o.OnClickPopoverText)
					text = o.OnClickPopoverText+data;
						*/
						$(self).popover({
							content: text,
							animation: true,
							html: true,
							placement: 'top',
							
						});						
					
						$(self).popover('show');
						setTimeout(function () {
							$(self).popover('hide');
					    }, 3000);
					
				}
		});
		
		});	
		
	});
};
})(jQuery);