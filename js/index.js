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

let count = 0;

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
  //이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지않고 그 이벤트를 취소합니다.
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
