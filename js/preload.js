// 在整個頁面內容載入完成後執行的程式碼

let circle = document.querySelector(".circle");
let textArray = [];
textArray = circle.innerText.split("");
let runAniIndex = 0;

function runAnimation(callback) {

  if (runAniIndex < textArray.length) {
    //清空之前的 animation
    let spans = circle.querySelectorAll("span");
    for (let i = 0; i < spans.length; i++) {
      spans[i].classList.remove("jump");
    }

    //貼新的單字
    let strHTML = `<span data-num="${runAniIndex}" class="jump">${textArray[runAniIndex]}</span>`;
    circle.innerHTML += strHTML;

    //抓取作後一個單字
    let spans2 = circle.querySelectorAll("span");
    // console.log(spans2);
    let lastspan = spans2[spans2.length - 1];

      //監聽作後一個單字動畫結束
      lastspan.addEventListener("animationend", function () {
        runAniIndex++;
        runAnimation(callback)
      })
    } else {
      runAniIndex = 0;
      callback();
    }

}


//執行開場動畫
$(".all-wrap").css("display","none");
$(".circle").empty();
runAnimation(function () {
  $(".preload").addClass("fade");
  setTimeout(function () {
    $(".all-wrap").css("display","block");
  }, 500)
  setTimeout(function () {
    $(".all-wrap").addClass("fadeReverse");
    $(".preload").css("display", "none");
  }, 1000)

});


