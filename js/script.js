// counter
$(".counter").counterUp({
  delay: 20,
  time: 1000,
});

// wow js
wow = new WOW();
wow.init();

// aos
AOS.init();

// isotope

// init Isotope
var $productList = $("#product-list").isotope({
  // options
});
// filter items on button click
$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $productList.isotope({ filter: filterValue });
});

// mix it up
$(document).ready(function () {
  mixitup(".products");
});

// owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  center: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

// slick slider
$(".multiple-items").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// curved text
$(document).ready(function () {
  const arc = function (t) {
    return {
      x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
      y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI),
    };
  };

  // this
  $("#text1").curvedText({
    curve: arc,
    domain: [-0.2, 0.2],
    viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 },
  });

  /**
   * Demo 3
   */
  const bezier = function (t) {
    const px = [100.0, 350.0, 500.0, 900.0],
      py = [400.0, 50.0, 500.0, 200.0],
      ax = [
        px[0],
        3.0 * (px[1] - px[0]),
        3.0 * (px[2] - 2.0 * px[1] + px[0]),
        px[3] - 3.0 * px[2] + 3.0 * px[1] - px[0],
      ],
      ay = [
        py[0],
        3.0 * (py[1] - py[0]),
        3.0 * (py[2] - 2.0 * py[1] + py[0]),
        py[3] - 3.0 * py[2] + 3.0 * py[1] - py[0],
      ],
      cx = ax[0] + ax[1] * t + ax[2] * t * t + ax[3] * t * t * t,
      cy = ay[0] + ay[1] * t + ay[2] * t * t + ay[3] * t * t * t;

    return {
      x: cx,
      y: cy,
    };
  };

  // this
  $("#text3").curvedText({
    curve: bezier,
    domain: [0.0, 1.0],
    viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 500.0 },
  });

  /**
   * Demo 4
   */
  const spiral = function (t) {
    const s = t + 1.0;

    return {
      x: 300.0 + 50.0 * s * Math.cos(2.0 * Math.PI * s - 0.5 * Math.PI),
      y: 300.0 + 50.0 * s * Math.sin(2.0 * Math.PI * s - 0.5 * Math.PI),
    };
  };

  // this
  $("#text4").curvedText({
    curve: spiral,
    domain: [0.0, 3.0],
    viewport: { x: 0.0, y: 0.0, width: 600.0, height: 600.0 },
  });
});

// jquery UI
$("#accordion").accordion();

$("#accordion2").accordion({
  collapsible: true,
});

$("#accordion3")
  .accordion({
    header: "> div > h3",
  })
  .sortable({
    axis: "y",
    handle: "h3",
    stop: function (event, ui) {
      // IE doesn't register the blur when sorting
      // so trigger focusout handlers to remove .ui-state-focus
      ui.item.children("h3").triggerHandler("focusout");

      // Refresh accordion to handle new order
      $(this).accordion("refresh");
    },
  });

// autocomplete
const searchTags = ["html", "css", "js", "jquery", "wordpress", "php", "mysql"];
$("#search").autocomplete({
  source: searchTags,
});

$.widget("custom.catcomplete", $.ui.autocomplete, {
  _create: function () {
    this._super();
    this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
  },
  _renderMenu: function (ul, items) {
    var that = this,
      currentCategory = "";
    $.each(items, function (index, item) {
      var li;
      if (item.category != currentCategory) {
        ul.append(
          "<li class='ui-autocomplete-category'>" + item.category + "</li>"
        );
        currentCategory = item.category;
      }
      li = that._renderItemData(ul, item);
      if (item.category) {
        li.attr("aria-label", item.category + " : " + item.label);
      }
    });
  },
});
const data = [
  { label: "html", category: "Front End" },
  { label: "css", category: "Front End" },
  { label: "js", category: "Front End" },
  { label: "jquery", category: "Front End" },
  { label: "wordpress", category: "Back End" },
  { label: "php", category: "Back End" },
  { label: "mysql", category: "Back End" },
];

$("#category").catcomplete({
  delay: 0,
  source: data,
});

// date picker
$("#datepicker").datepicker({
  changeMonth: true,
  changeYear: true,
});

// tabs
$("#tabs").tabs({
  event: "mouseover",
});

// range
$("#slider-range").slider({
  range: true,
  min: 0,
  max: 500,
  values: [75, 300],
  slide: function (event, ui) {
    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
  },
});
$("#amount").val(
  "$" +
    $("#slider-range").slider("values", 0) +
    " - $" +
    $("#slider-range").slider("values", 1)
);

// tooltip

$("#show-option").tooltip({
  show: {
    effect: "slideDown",
    delay: 250,
  },
});

$("#open-event").tooltip({
  show: null,
  position: {
    my: "left top",
    at: "left bottom",
  },
  open: function (event, ui) {
    ui.tooltip.animate({ top: ui.tooltip.position().top + 10 }, "fast");
  },
});

// dialog
$(function () {
  var dialog,
    form,
    emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    name = $("#name"),
    email = $("#email"),
    password = $("#password"),
    allFields = $([]).add(name).add(email).add(password),
    tips = $(".validateTips");

  function updateTips(t) {
    tips.text(t).addClass("ui-state-highlight");
    setTimeout(function () {
      tips.removeClass("ui-state-highlight", 1500);
    }, 500);
  }

  function checkLength(o, n, min, max) {
    if (o.val().length > max || o.val().length < min) {
      o.addClass("ui-state-error");
      updateTips(
        "Length of " + n + " must be between " + min + " and " + max + "."
      );
      return false;
    } else {
      return true;
    }
  }

  function checkRegexp(o, regexp, n) {
    if (!regexp.test(o.val())) {
      o.addClass("ui-state-error");
      updateTips(n);
      return false;
    } else {
      return true;
    }
  }

  function addUser() {
    var valid = true;
    allFields.removeClass("ui-state-error");

    valid = valid && checkLength(name, "username", 3, 16);
    valid = valid && checkLength(email, "email", 6, 80);
    valid = valid && checkLength(password, "password", 5, 16);

    valid =
      valid &&
      checkRegexp(
        name,
        /^[a-z]([0-9a-z_\s])+$/i,
        "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter."
      );
    valid = valid && checkRegexp(email, emailRegex, "eg. ui@jquery.com");
    valid =
      valid &&
      checkRegexp(
        password,
        /^([0-9a-zA-Z])+$/,
        "Password field only allow : a-z 0-9"
      );

    if (valid) {
      $("#users tbody").append(
        "<tr>" +
          "<td>" +
          name.val() +
          "</td>" +
          "<td>" +
          email.val() +
          "</td>" +
          "<td>" +
          password.val() +
          "</td>" +
          "</tr>"
      );
      dialog.dialog("close");
    }
    return valid;
  }

  dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
      "Create an account": addUser,
      Cancel: function () {
        dialog.dialog("close");
      },
    },
    close: function () {
      form[0].reset();
      allFields.removeClass("ui-state-error");
    },
  });

  form = dialog.find("form").on("submit", function (event) {
    event.preventDefault();
    addUser();
  });

  $("#create-user")
    .button()
    .on("click", function () {
      dialog.dialog("open");
    });
});

// sortable

$("#sortable").sortable({
  placeholder: "ui-state-highlight",
});
$("#sortable").disableSelection();

// pro sidebar
$(".sidebar-dropdown > a").click(function () {
  $(".sidebar-submenu").slideUp(200);
  if ($(this).parent().hasClass("active")) {
    $(".sidebar-dropdown").removeClass("active");
    $(this).parent().removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this).next(".sidebar-submenu").slideDown(200);
    $(this).parent().addClass("active");
  }
});

$("#close-sidebar").click(function () {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function () {
  $(".page-wrapper").addClass("toggled");
});
