var makeBSS = function (a, b) {
    var c = document.querySelectorAll(a),
        d = {},
        e = {
            init: function (a, b) {
                this.counter = 0, this.el = a, this.$items = a.querySelectorAll("figure"), this.numItems = this.$items.length, b = b || {}, b.auto = b.auto || !1, this.opts = {
                    auto: "undefined" == typeof b.auto ? !1 : b.auto,
                    speed: "undefined" == typeof b.auto.speed ? 2500 : b.auto.speed
                }, this.$items[0].classList.add("bss-show"), this.opts.auto && this.autoCycle(this.el, this.opts.speed, this.opts.pauseOnHover), this.opts.fullScreen && this.addFullScreen(this.el), this.opts.swipe && this.addSwipe(this.el)
            },
            showCurrent: function (a) {
                this.counter = a > 0 ? this.counter + 1 === this.numItems ? 0 : this.counter + 1 : this.counter - 1 < 0 ? this.numItems - 1 : this.counter - 1, [].forEach.call(this.$items, function (a) {
                    a.classList.remove("bss-show")
                }), this.$items[this.counter].classList.add("bss-show")
            },
            autoCycle: function (a, b, c) {
                var d = this,
                    e = window.setInterval(function () {
                        d.showCurrent(1)
                    }, b);
                c && (a.addEventListener("mouseover", function () {
                    e = clearInterval(e)
                }, !1), a.addEventListener("mouseout", function () {
                    e = window.setInterval(function () {
                        d.showCurrent(1)
                    }, b)
                }, !1))
            },
        };
    [].forEach.call(c, function (a) {
        d = Object.create(e), d.init(a, b)
    })
};