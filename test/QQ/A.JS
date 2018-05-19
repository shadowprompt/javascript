(function() {
    var t = ["hide-l", "outside-l", "beside-l", "cur", "beside-r", "outside-r", "hide-r"];
    var i = function() {
        return 0
    };
    var r = function(t) {
        var t = t || {};
        this.$slider = t.$slider;
        this.bindEvent;
        this.tpa_prefix = "star-icon-";
        this.$sliderItem = t.$sliderItem || [];
        this.num = t.num || this.$sliderItem.length;
        this.data = t.data;
        this.curNum = t.curNum || 3;
        this.bindEvent();
        this.sliderBeforeCb = t.sliderBeforeCb || i;
        this.sliderAftreCb = t.sliderAfterCb || i;
        this.isSliding = false
    };

    function e(t) {
        return $(this).hasClass("star-icon-hide-l") || $(this).hasClass("star-icon-hide-r")
    }
    r.prototype = {
        bindEvent: function() {
            var t = this;
            var i, r, s, a;
            this.$slider.on("touchstart", function(t) {
                var e = t.touches ? t.touches[0] : t;
                var s = t.currentTarget;
                i = e.pageX;
                r = e.pageY;
                a = false
            }).on("touchmove", function(e) {
                var s = e.touches ? e.touches[0] : e;
                var n = s.pageX - i;
                var d = s.pageY - r;
                if (!a && Math.abs(n) > 5 && Math.abs(n) > Math.abs(d)) {
                    var h = n > 0 ? 1 : -1;
                    a = true;
                    t.sliderToIndex(h);
                    e.preventDefault()
                }
            }).on("touchend", function(t) {});
            this.$sliderItem.on("tap", function() {
                if (e($(this))) {
                    return
                }
                var i = +$(this).data("cindex");
                if (i == t.curNum) {
                    t.sliderAftreCb && t.sliderAftreCb();
                    return
                }
                var r = t.curNum - i;
                r = r > 0 ? 1 : -1;
                t.sliderToIndex(r)
            })
        },
        sliderToIndex: function(i) {
            var r = this;
            if (this.isSliding) {
                return
            }
            this.isSliding = true;
            var e = i > 0;
            var s = 0,
                a = this.$sliderItem,
                n;
            for (s = 0; s < this.num; s++) {
                var d, h;
                var u = this.$sliderItem.eq(s);
                d = +u.attr("data-cindex");
                h = d + i;
                if (h < 0) {
                    h += this.num
                }
                if (h >= this.num) {
                    h %= this.num
                }
                u.attr("data-cindex", h);
                u.attr("data-pindex", d)
            }
            for (s = 0; s < this.num; s++) {
                var o = e ? this.num - 1 - s : s;
                var l = "[data-pindex='" + o + "']";
                var u = $(l);
                var c, f;
                var v = +u.attr("data-cindex");
                var d = +u.attr("data-pindex");
                c = this.tpa_prefix + t[d];
                f = this.tpa_prefix + t[v];
                u.removeClass(c);
                u.addClass(f)
            }
            this.changeAstro(e);
            this.sliderAftreCb && this.sliderAftreCb();
            setTimeout(function() {
                r.isSliding = false
            }, 150)
        },
        changeAstro: function(t) {
            var i = !t ? $(".star-icon-hide-r") : $(".star-icon-hide-l");
            var r = +$(".star-icon-cur").attr("data-astro");
            if (!t) {
                r += 3;
                if (r > 11) {
                    r = Math.abs(12 - r)
                }
            } else {
                r -= 3;
                if (r < 0) {
                    r = 12 + r
                }
            }
            i.attr("data-astro", r)
        }
    };
    window.StarSlider = r
})();