$(function () {
  $(".nav_btn").hover(function () {
    $(this).find(".sub_nav_btn_box").slideToggle(200);
  });
});

$(function () {
  $(".main_section_banner_trip_btn").click(function () {
    $(this).find(".main_section_banner_trip_btn_sub_box").slideToggle(200);
  });
});

var count = 0;

$(".prev").click(function (e) {
  e.preventDefault();
  count += 1;
  if (count == +1) {
    alert("마지막입니다.");
    count = 0;
  } else {
    $(".main_banner_in").animate(
      {
        left: "+=542px",
      },
      1000
    );
  }
  console.log(count);
});

$(".next").click(function (e) {
  e.preventDefault();
  count -= 1;
  if (count == -3) {
    alert("마지막입니다.");
    count = count + 1;
  } else {
    $(".main_banner_in").animate(
      {
        left: "-=542px",
      },
      1000
    );
  }
  console.log(count);
});
