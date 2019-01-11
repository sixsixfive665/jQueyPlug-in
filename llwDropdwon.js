//拥有初始高度、宽度元素绑定  需要传入下拉菜单触发方法，列表名称array
//字体大小，字体颜色，背景颜色，hover颜色可传可不传
(function($) {
    $.fn.ssfDropdwon = function(event, arr, fontSize, color, bgColor, hoverColor) {
        var dropdwonConfig = {
            number: arr.length,
            height: null,
            width: null,
            fontSize: 12,
            color: "#000",
            bgColor: "#ccc",
            hoverColor: "#eee"
        }
        $this = this;
        $this.text(arr[0]);
        dropdwonConfig.height = $this.height();
        dropdwonConfig.width = $this.width();
        if (arguments[2]) {
            dropdwonConfig.fontSize = fontSize;
        }
        if (arguments[3]) {
            dropdwonConfig.color = color;
        }
        if (arguments[4]) {
            dropdwonConfig.bgColor = bgColor;
        }
        if (arguments[5]) {
            dropdwonConfig.hoverColor = hoverColor;
        }
        $this.css({
            position: "relative",
            fontSize: dropdwonConfig.fontSize + "px",
            color: dropdwonConfig.color,
            lineHeight: dropdwonConfig.height + "px",
            textAlign: "center",
            background: dropdwonConfig.bgColor,
            cursor: "pointer",
	    zIndex:999999
        })
        $("<div/>").appendTo($this).addClass("menu");
        var $menu = $this.find(".menu");
        $menu.css({
            position: "absolute",
            top: dropdwonConfig.height,
            display: "none"
        });
        for (i = 1; i < dropdwonConfig.number; i++) {
            $menu.append("<p>" + arr[i] + "</p>")
        }
        $menu.find("p").css({
            height: dropdwonConfig.height,
            width: dropdwonConfig.width,
            margin: 0,
            background: dropdwonConfig.bgColor
        });
        if (event == "click") {
            $this.click(function() {
                $menu.stop().slideDown();
            })
        } else if (event == "mouseenter") {
            $this.mouseenter(function() {
                $menu.stop().slideDown();
            })
        }
        $this.mouseleave(function() {
            $menu.stop().slideUp();
        })
        $menu.find("p").mouseover(function() {
            $(this).css("background", dropdwonConfig.hoverColor);
        })
        $menu.find("p").mouseleave(function() {
            $(this).css("background", dropdwonConfig.bgColor);
        })
        $menu.find("p").click(function() {
            alert("点击了" + $(this).text());
        })
    }
})(jQuery)