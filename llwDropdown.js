//拥有初始高度、宽度元素绑定  需要传入下拉菜单触发方法，列表名称array
//字体大小，字体颜色，背景颜色，hover颜色可传可不传
(function($) {
    $.fn.llwDropdown = function(event, arr, fontSize, color, bgColor, hoverColor) {
        var dropdownConfig = {
            number: arr.length,
            height: null,
            width: null,
            fontSize: 12,
            color: "#000",
            bgColor: "#ccc",
            hoverColor: "#eee"
        }
        var $this = this;
        dropdownConfig.height = $this.height();
        dropdownConfig.width = $this.width();
        if (arguments[2]) {
            dropdownConfig.fontSize = fontSize;
        }
        if (arguments[3]) {
            dropdownConfig.color = color;
        }
        if (arguments[4]) {
            dropdownConfig.bgColor = bgColor;
        }
        if (arguments[5]) {
            dropdownConfig.hoverColor = hoverColor;
        }
        $("<div/>").appendTo($this).addClass("dropdown");
        var $dropdown = $this.find(".dropdown");
        $dropdown.text(arr[0]);
        $dropdown.css({
            position: "relative",
            height: dropdownConfig.height,
            width: dropdownConfig.width,
            fontSize: dropdownConfig.fontSize + "px",
            color: dropdownConfig.color,
            lineHeight: dropdownConfig.height + "px",
            textAlign: "center",
            background: dropdownConfig.bgColor,
            cursor: "pointer",
            zIndex: 999999
        })
        $("<div/>").appendTo($dropdown).addClass("menu");
        var $menu = $this.find(".menu");
        $menu.css({
            position: "absolute",
            top: dropdownConfig.height,
            display: "block"
        });
        for (var i = 1; i < dropdownConfig.number; i++) {
            $menu.append("<p>" + arr[i] + "</p>")
        }
        $menu.find("p").css({
            height: dropdownConfig.height,
            width: dropdownConfig.width,
            margin: 0,
            background: dropdownConfig.bgColor
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
            $(this).css("background", dropdownConfig.hoverColor);
        })
        $menu.find("p").mouseleave(function() {
            $(this).css("background", dropdownConfig.bgColor);
        })
        $menu.find("p").click(function() {
            alert("点击了" + $(this).text());
        })
    }
})(jQuery)