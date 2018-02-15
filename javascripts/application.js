var Simande = window.Simande || {};
    Simande.debug = false;

( function() {

  function init() {
	
		$('.menu').bind('click', function(e) {
			e.preventDefault();
			
			$('.about_overlay_content').fadeTo(0, 0, function() {
				$('.about_overlay').fadeIn(250);
				
				$('body').animate({'margin-right': '150px'}, 250, 'linear');
				
				$(this).css({'margin-right': ($(this).outerWidth(true)*-1)}).fadeTo(0,100, function() {
					$(this).animate({'margin-right': 0}, 200, 'linear');
				})
			});
		});
		
		$('.close, .about_overlay_opaque').bind('click', function(e) {
			e.preventDefault();
			
			var about_overlay_content = $('.about_overlay_content');
			
			about_overlay_content.animate({'margin-right': (about_overlay_content.outerWidth(true)*-1)}, 200, 'linear');
			$('body').animate({'margin-right': '0px'}, 250, 'linear');
			$('.about_overlay').fadeOut(250, function() {
				about_overlay_content.removeAttr('style');
			});
		});
		
		$('.portfolio_item a').bind('click', function(e) {
			e.preventDefault();
			
			var original_ontainer_id = $(this).data('container-id');
			
			$('#portfolio_overlay_content').html($(original_ontainer_id).html());
			
			$('.portfolio_overlay').fadeIn(200);

		});
		
		$('.portfolio_overlay').delegate('.icon-close', 'click', function(e) {
			e.preventDefault();
			
			$('.portfolio_overlay').fadeOut(150, function() {
				$('.portfolio_overlay_content').empty();
			});
		});
		
		$('.portfolio_overlay').delegate('.totop', 'click', function(e) {
			e.preventDefault();
			
			$('.portfolio_overlay_content_wrapper').animate({ scrollTop: 0 }, 150, 'linear');
		})
		
  };

  $(document).ready(init);

})();