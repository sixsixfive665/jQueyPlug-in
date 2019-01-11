(function($){
	$.fn.llwCarousel = function(){
		var $this = this;
		var carouselConfig = {
			width:null,
			height:null,
		}
		carouselConfig.width = $this.width();
		carouselConfig.height = $this.height();
		$("<div/>").appendTo($this).addClass("carousel");

	}
})(jQuery)