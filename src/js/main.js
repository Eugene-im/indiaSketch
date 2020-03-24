//= lib/jquery-3.4.1.slim.min.js
//= lib/popper.min.js
//= lib/bootstrap.min.js
//= lib/slick.min.js
//= lib/map.js
//= lib/multirange.js
//= lib/mpop.min.js
//= lib/nouislider.min.js


$(document).ready(function () {

  $(".btn-number").click(function (e) {
    e.preventDefault();

    fieldName = $(this).attr("data-field");
    type = $(this).attr("data-type");
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
      if (type == "minus") {
        if (currentVal > input.attr("min")) {
          input.val(currentVal - 1).change();
        }
        if (parseInt(input.val()) == input.attr("min")) {
          $(this).attr("disabled", true);
        }
      } else if (type == "plus") {
        if (currentVal < input.attr("max")) {
          input.val(currentVal + 1).change();
        }
        if (parseInt(input.val()) == input.attr("max")) {
          $(this).attr("disabled", true);
        }
      }
    } else {
      input.val(0);
    }
  });
  $(".input-number").focusin(function () {
    $(this).data("oldValue", $(this).val());
  });
  $(".input-number").change(function () {
    minValue = parseInt($(this).attr("min"));
    maxValue = parseInt($(this).attr("max"));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr("name");
    if (valueCurrent >= minValue) {
      $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr(
        "disabled"
      );
    } else {
      alert("Sorry, the minimum value was reached");
      $(this).val($(this).data("oldValue"));
    }
    if (valueCurrent <= maxValue) {
      $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr(
        "disabled"
      );
    } else {
      alert("Sorry, the maximum value was reached");
      $(this).val($(this).data("oldValue"));
    }
  });
  $(".input-number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if (
      $.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  });

  $(".tab__butons").click(function (e) {
    e.preventDefault();
    if (
      $(".cart__popup_block").hasClass("dnone") &&
      $(".tab-content").hasClass("dnone")
    ) {
      $(".cart__popup_block").removeClass("dnone");
      $(".tab-content").removeClass("dnone");
    }
  });
  $(".tab__nav_close").click(function (e) {
    e.preventDefault();
    if (

      !($(".cart__popup_block").hasClass("dnone")) &&
      !($(".tab-content").hasClass("dnone")) &&
      $('.tab__butons .nav-link').hasClass("active")
    ) {
      $(".cart__popup_block").addClass("dnone");
      $(".tab-content").addClass("dnone");
      $('.tab__butons .nav-link').removeClass('active');
    }
  });
  $("html").click(function (e) {
    if (
      (e.target != $('.tab__nav_close')) &&
      !($('.cart__popup_block').is(':hover')) &&
      !($(".cart__popup_block").hasClass("dnone")) &&
      !($(".tab-content").hasClass("dnone")) &&
      $('.tab__butons .nav-link').hasClass("active")
    ) {
      e.preventDefault();
      $(".cart__popup_block").addClass("dnone");
      $(".tab-content").addClass("dnone");
      $('.tab__butons .nav-link').removeClass('active');
    }else if(
              (e.target != $('#myTabContentmob')) && (
              (e.target != $('#myTabmob'))           )
            ){
              if(
                $('#myTabContentmob .tab-pane').hasClass('active')&&
                $('#myTabContentmob .tab-pane').hasClass('show')
              ){
                $('#myTabmob .nav-item').removeClass('active');
                $('#myTabmob .nav-item').attr({'aria-selected' :'false'});
                $('#myTabContentmob .tab-pane').removeClass('active');
                $('#myTabContentmob .tab-pane').removeClass('show');
              }
    }
  });

  $('#header__search').keypress(function () {
    $('.drop__items').removeClass('d-none')
  })
  $('#header__search').keypress(function () {
    var value = $(this).val();
    if (value.length > 0) {
      $('.drop__items').removeClass('d-none')
    } else {
      $('.drop__items').addClass('d-none')
    }
  })


  $('.item__slider_big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: '.item__slider_small',
    responsive: [{
      breakpoint: 992,
      settings: {
        dots: true
      }
    }]
  });
  $('.item__slider_small').slick({
    slidesToShow: 5,
    infinite: true,
    slidesToScroll: 1,
    asNavFor: '.item__slider_big',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        // centerMode: true,
        vertical: true,
        verticalSwiping: true
      }
    }]
  });

  $('.partners__slider').slick({
    slidesToShow: 6,
    arrows: false,
    dots: false,
    infinite: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        asNavFor: '.partners__slider_mobile_2,.partners__slider_mobile_1'
      }
    }]
  })
  $('.partners__slider_mobile_1').slick({
    responsive: [{
      breakpoint: 80000,
      settings: "unslick",
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: false,
        asNavFor: '.partners__slider_mobile_2,.partners__slider'
      }
    }]
  });
  $('.partners__slider_mobile_2').slick({
    responsive: [{
      breakpoint: 80000,
      settings: "unslick",
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: false,
        asNavFor: '.partners__slider_mobile_1,.partners__slider'
      }
    }]
  });

  $(document).on('click', '[data-toggle="lightbox"]', function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });



function DropDown(el) {
  this.dd = el;
  this.placeholder = this.dd.find('div.arrow_d .choosed');
  this.opts = this.dd.find('ul.drop li');
  this.val = '';
  this.index = -1;
  this.initEvents();
}

DropDown.prototype = {
  initEvents: function () {
      var obj = this;
      obj.dd.on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          $(this).toggleClass('active');
      });
      obj.opts.on('click', function () {
          var opt = $(this);
          obj.val = opt.text();
          obj.index = opt.index();
          obj.placeholder.text(obj.val);
          opt.siblings().removeClass('selected');
          opt.filter(':contains("' + obj.val + '")').addClass('selected');
      }).change();
  },
  getValue: function () {
      return this.val;
  },
  getIndex: function () {
      return this.index;
  }
};

$(function () {
  // create new variable for each menu
  var dd1 = new DropDown($('#noble-gases'));
  // var dd2 = new DropDown($('#other-gases'));
  $(document).click(function () {
      // close menu on document click
      $('.wrap-drop').removeClass('active');
  });
});

});
"use strict";

(function () {
  var _PRICE_SLIDER = document.getElementById('slider');

  var _PRICE_NODES = [document.getElementById('data-first-node'), document.getElementById('data-last-node')];
  noUiSlider.create(_PRICE_SLIDER, {
    start: [parseInt(_PRICE_SLIDER.getAttribute('data-first-value') || 0), parseInt(_PRICE_SLIDER.getAttribute('data-last-value') || 1000)],
    connect: true,
    range: {
      'min': parseInt(_PRICE_SLIDER.getAttribute('data-min') || 0),
      'max': parseInt(_PRICE_SLIDER.getAttribute('data-max') || 1000)
    }
  });

  for (var _i = 0, _PRICE_NODES2 = _PRICE_NODES; _i < _PRICE_NODES2.length; _i++) {
    var node = _PRICE_NODES2[_i];
    node.setAttribute('min', parseInt(_PRICE_SLIDER.getAttribute('data-min') || 0));
    node.setAttribute('max', parseInt(_PRICE_SLIDER.getAttribute('data-max') || 1000));
  }

  _PRICE_NODES[0].addEventListener('change', function () {
    _PRICE_SLIDER.noUiSlider.set([this.value, null]);
  });

  _PRICE_NODES[1].addEventListener('change', function () {
    _PRICE_SLIDER.noUiSlider.set([null, this.value]);
  });

  _PRICE_SLIDER.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    _PRICE_NODES[handle].value = parseInt(values[handle] || 0);
  });
})();