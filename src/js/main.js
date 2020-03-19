//= lib/jquery-3.4.1.slim.min.js
//= lib/popper.min.js
//= lib/bootstrap.min.js

$(".btn-number").click(function(e) {
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
$(".input-number").focusin(function() {
  $(this).data("oldValue", $(this).val());
});
$(".input-number").change(function() {
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
$(".input-number").keydown(function(e) {
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

$(".tab__butons").click(function(e) {
  e.preventDefault();
  if (
    $(".cart__popup_block").hasClass("dnone") &&
    $(".tab-content").hasClass("dnone")
  ) {
      $(".cart__popup_block").removeClass("dnone");
      $(".tab-content").removeClass("dnone");
  }
});
$(".tab__nav_close").click(function(e) {
    e.preventDefault();
    if (
      !($(".cart__popup_block").hasClass("dnone")) &&
      !($(".tab-content").hasClass("dnone"))
    ) {
        $(".cart__popup_block").addClass("dnone");
        $(".tab-content").addClass("dnone");
    }
  });


  $('#header__search').keypress(function(){
    $('.drop__items').removeClass('d-none')
  })
  $('#header__search').keypress(function(){
    var value = $(this).val();
    if ( value.length > 0){
      $('.drop__items').removeClass('d-none')
    }else{
      $('.drop__items').addClass('d-none')
    }
  })