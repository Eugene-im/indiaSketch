$(document).ready(function () {
    function e(e) {
        this.dd = e, this.placeholder = this.dd.find("div.arrow_d .choosed"), this.opts = this.dd.find("ul.drop li"), this.val = "", this.index = -1, this.initEvents()
    }
    $(".btn-number").click(function (e) {
        e.preventDefault(), fieldName = $(this).attr("data-field"), type = $(this).attr("data-type");
        var t = $("input[name='" + fieldName + "']"),
            n = parseInt(t.val());
        isNaN(n) ? t.val(0) : "minus" == type ? (n > t.attr("min") && t.val(n - 1).change(), parseInt(t.val()) == t.attr("min") && $(this).attr("disabled", !0)) : "plus" == type && (n < t.attr("max") && t.val(n + 1).change(), parseInt(t.val()) == t.attr("max") && $(this).attr("disabled", !0))
    }), $(".input-number").focusin(function () {
        $(this).data("oldValue", $(this).val())
    }), $(".input-number").change(function () {
        minValue = parseInt($(this).attr("min")), maxValue = parseInt($(this).attr("max")), valueCurrent = parseInt($(this).val()), name = $(this).attr("name"), valueCurrent >= minValue ? $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr("disabled") : (alert("Sorry, the minimum value was reached"), $(this).val($(this).data("oldValue"))), valueCurrent <= maxValue ? $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr("disabled") : (alert("Sorry, the maximum value was reached"), $(this).val($(this).data("oldValue")))
    }), $(".input-number").keydown(function (e) {
        -1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) || 65 == e.keyCode && !0 === e.ctrlKey || 35 <= e.keyCode && e.keyCode <= 39 || (e.shiftKey || e.keyCode < 48 || 57 < e.keyCode) && (e.keyCode < 96 || 105 < e.keyCode) && e.preventDefault()
    }), $(".tab__butons").click(function (e) {
        e.preventDefault(), $(".cart__popup_block").hasClass("dnone") && $(".tab-content").hasClass("dnone") && ($(".cart__popup_block").removeClass("dnone"), $(".tab-content").removeClass("dnone"))
    }), $(".tab__nav_close").click(function (e) {
        e.preventDefault(), $(".cart__popup_block").hasClass("dnone") || $(".tab-content").hasClass("dnone") || !$(".tab__butons .nav-link").hasClass("active") || ($(".cart__popup_block").addClass("dnone"), $(".tab-content").addClass("dnone"), $(".tab__butons .nav-link").removeClass("active"))
    }), $("html").click(function (e) {
        e.target == $(".tab__nav_close") || $(".cart__popup_block").is(":hover") || $(".cart__popup_block").hasClass("dnone") || $(".tab-content").hasClass("dnone") || !$(".tab__butons .nav-link").hasClass("active") ? e.target != $("#myTabContentmob") && e.target != $("#myTabmob") && $("#myTabContentmob .tab-pane").hasClass("active") && $("#myTabContentmob .tab-pane").hasClass("show") && ($("#myTabmob .nav-item").removeClass("active"), $("#myTabmob .nav-item").attr({
            "aria-selected": "false"
        }), $("#myTabContentmob .tab-pane").removeClass("active"), $("#myTabContentmob .tab-pane").removeClass("show")) : (e.preventDefault(), $(".cart__popup_block").addClass("dnone"), $(".tab-content").addClass("dnone"), $(".tab__butons .nav-link").removeClass("active"))
    }), $(".ui__search").keypress(function (e) {
        0 < $(e.target).val().length ? $(e.target).siblings('ul').show() : $(e.target).siblings('ul').hide()
    }), $(".item__slider_big").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        infinite: !0,
        asNavFor: ".item__slider_small",
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: !0
            }
        }]
    }), $(".item__slider_small").slick({
        slidesToShow: 5,
        infinite: !0,
        slidesToScroll: 1,
        asNavFor: ".item__slider_big",
        dots: !1,
        arrows: !1,
        focusOnSelect: !0,
        responsive: [{
            breakpoint: 992,
            settings: {
                vertical: !0,
                verticalSwiping: !0
            }
        }]
    }), $(".partners__slider").slick({
        slidesToShow: 6,
        arrows: !1,
        dots: !1,
        infinite: !0,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                asNavFor: ".partners__slider_mobile_2,.partners__slider_mobile_1"
            }
        }]
    }), $(".partners__slider_mobile_1").slick({
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: !1,
                dots: !1,
                asNavFor: ".partners__slider_mobile_2,.partners__slider"
            }
        }]
    }), $(".partners__slider_mobile_2").slick({
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: !1,
                dots: !1,
                asNavFor: ".partners__slider_mobile_1,.partners__slider"
            }
        }]
    }), $(document).on("click", '[data-toggle="lightbox"]', function (e) {
        e.preventDefault(), $(this).ekkoLightbox()
    }), e.prototype = {
        initEvents: function () {
            var t = this;
            t.dd.on("click", function (e) {
                e.preventDefault(), e.stopPropagation(), $(this).toggleClass("active")
            }), t.opts.on("click", function () {
                var e = $(this);
                t.val = e.text(), t.index = e.index(), t.placeholder.text(t.val), e.siblings().removeClass("selected"), e.filter(':contains("' + t.val + '")').addClass("selected")
            }).change()
        },
        getValue: function () {
            return this.val
        },
        getIndex: function () {
            return this.index
        }
    }, $(function () {
        new e($("#noble-gases"));
        $(document).click(function () {
            $(".wrap-drop").removeClass("active")
        })
    }), $(window).on("load", function () {
        $(window).width() <= 972 && $(".filter__section ").addClass("tooggled")
    }), $(".toogl-btn").click(function () {
        $(".filter__section").toggleClass("tooggled")
    }), $(".drop__item_remove").click(function (e) {
        e.preventDefault(), $(this).parent().hide()
    })
}),
function () {
    var e = document.getElementById("slider"),
        r = [document.getElementById("data-first-node"), document.getElementById("data-last-node")];
    noUiSlider.create(e, {
        start: [parseInt(e.getAttribute("data-first-value") || 0), parseInt(e.getAttribute("data-last-value") || 1e3)],
        connect: !0,
        range: {
            min: parseInt(e.getAttribute("data-min") || 0),
            max: parseInt(e.getAttribute("data-max") || 1e3)
        }
    });
    for (var t = 0, n = r; t < n.length; t++) {
        var i = n[t];
        i.setAttribute("min", parseInt(e.getAttribute("data-min") || 0)), i.setAttribute("max", parseInt(e.getAttribute("data-max") || 1e3))
    }
    r[0].addEventListener("change", function () {
        e.noUiSlider.set([this.value, null])
    }), r[1].addEventListener("change", function () {
        e.noUiSlider.set([null, this.value])
    }), e.noUiSlider.on("update", function (e, t, n, i, o) {
        r[t].value = parseInt(e[t] || 0)
    })
}();