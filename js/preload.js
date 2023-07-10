    // 在整個頁面內容載入完成後執行的程式碼

    let circle = document.querySelector(".circle");
    let textArray = [];
    textArray = circle.innerText.split("");

    let runAniIndex = 0;

    // //禁止滑鼠和手機滑動動作
    // disableScroll(function () {
    //   // 開放滑鼠和手機滑動動作
    //   enableScroll();
    // });

    // ------------------------------------------------

    // function disableScroll(callback) {
    //   // 禁止滑鼠滾動事件
    //   document.addEventListener("wheel", preventDefaultScroll, { passive: false });
    //   // 禁止手機觸摸滑動事件
    //   document.addEventListener("touchmove", preventDefaultScroll, { passive: false });
    //   setTimeout(function () {
    //     callback();
    //   }, 4000)
    // }

    // function enableScroll() {
    //   // 啟用滑鼠滾動事件
    //   document.removeEventListener("wheel", preventDefaultScroll);
    //   // 啟用手機觸摸滑動事件
    //   document.removeEventListener("touchmove", preventDefaultScroll);
    // }

    // function preventDefaultScroll(event) {
    //   event.preventDefault();
    // }

    function runAnimation(callback) {

      if (runAniIndex < textArray.length) {
        let spans = document.querySelectorAll("span");
        // console.log(spans);
        for (let i = 0; i < spans.length; i++) {
          spans[i].classList.remove("jump");
        }

        //貼新的單字
        let strHTML = `<span data-num="${runAniIndex}" class="jump">${textArray[runAniIndex]}</span>`;
        circle.innerHTML += strHTML;

        //抓取作後一個單字
        let spans2 = document.querySelectorAll("span");
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

    // ------------------------------------------------

    //執行開場動畫
    $("body").css("overflow","hidden")
    $(".circle").empty();
    runAnimation(function () {
      $(".preload").addClass("fade");
      setTimeout(function () {
        $(".preload").css("display", "none");
        $("body").css("overflow","auto")
      }, 1000)

    });

    // ------------------------------------------------

