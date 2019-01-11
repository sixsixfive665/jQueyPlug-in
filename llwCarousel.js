//传入轮播图地址array
//circle颜色、被选中颜色可传可不传
(function($) {
    $.fn.llwCarousel = function(arr,color,selectedColor) {
        var $this = this;
        var carouselConfig = {
            num: arr.length,
            width: null,
            height: null,
            color:"#666",
            selectedColor:"#eee"
        }
        carouselConfig.width = $this.width();
        carouselConfig.height = $this.height();
        if (arguments[1]) {
            carouselConfig.color = color;
        }
        if (arguments[2]) {
            carouselConfig.selectedColor = selectedColor;
        }
        $("<div/>").appendTo($this).addClass("carousel");
        var $carousel = $this.find(".carousel");
        $carousel.css({
            position: "relative",
            height: carouselConfig.height,
            width: carouselConfig.width
        })
        for (var i = 0; i < carouselConfig.num; i++) {
            $("<div/>").appendTo($carousel).addClass("carouselPic");
        }
        var $carouselPic = $carousel.find(".carouselPic");
        $carouselPic.css({
            height: carouselConfig.height,
            width: carouselConfig.width,
            position: "absolute",
            display: "none",
            zIndex:999
        })
        $carouselPic.eq(0).css("display", "block");
        for (var i = 0; i < carouselConfig.num; i++) {
            $carouselPic.eq(i).css({
                background: "url(" + arr[i] + ")",
                backgroundSize: "100% 100%"
            })
        }
        $("<span/>").appendTo($carousel).addClass("circles");
        var $circles = $carousel.find(".circles");
        $circles.css({
            display: "inline-block",
            width: carouselConfig.width,
            height: carouselConfig.height * 0.1,
            position: "absolute",
            bottom: carouselConfig.height * 0.05,
            textAlign: "center",
            lineHeight: carouselConfig.height * 0.1 + "px",
            zIndex:99999
        })
        for (var i = 0; i < carouselConfig.num; i++) {
            $("<span/>").appendTo($circles).addClass("circle");
        }
        var $circle = $circles.find(".circle");
        $circle.css({
            display: "inline-block",
            width: carouselConfig.height * 0.05,
            height: carouselConfig.height * 0.05,
            background: carouselConfig.color,
            marginLeft: carouselConfig.height * 0.05,
            borderRadius: "50%",
            cursor: "pointer"
        })
        $circle.eq(0).css("background",carouselConfig.selectedColor);
        var picIndex = 1;
        setInterval(function() {
            if (picIndex == carouselConfig.num) {
                picIndex = 0;
            }
            change(picIndex);
            picIndex++;
        }, 2500)
        $circle.click(function(){
        	picIndex = $(this).index();
        	change(picIndex);
        	picIndex++;
        })
        function change(index){
        	$carouselPic.css("display","none");
            $carouselPic.eq(index).css("display","block");
            $circle.css("background",carouselConfig.color);
            $circle.eq(index).css("background",carouselConfig.selectedColor);
        }
    }
})(jQuery)