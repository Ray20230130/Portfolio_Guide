
; (function () {

  //~! index 
  let nav = document.querySelector("nav");
  let header = document.querySelector("header");
  let listBtn = document.querySelector(".list");
  let list = document.querySelector("nav ul");
  let listFlag = false;
  // console.dir(header.clientHeight);

  window.addEventListener("scroll", function () {
    if (window.scrollY >= header.clientHeight) {
      nav.style.backgroundColor = "#58769ccc";
      nav.style.boxShadow = "0px 2px 15px 8px #ccc";
    } else {
      nav.style.backgroundColor = "#58769c";
      nav.style.boxShadow = "none";
    }
  })

  window.addEventListener("resize", function () {
    if(this.window.innerWidth >= 768){
      list.style.display = "flex";
    }else{
      list.style.display = "none";
    }
  })

  listBtn.addEventListener("click", function () {
    if(!listFlag){
      list.style.display = "block";
      listFlag = true;
    }else{
      list.style.display = "none";
      listFlag = false;
    }
  })



  //~! Adobe 

  //*橫圖
  $.ajax({
    method: "GET",
    url: "json/Adobe-H.json",
    dataType: "JSON",
    success: showdata,
    error: function () {
      alert("Error - json/Adobe-H.json")
    }
  })

  function showdata(data) {
    // console.log(data);
    $("#box_H").empty();
    for(let i=0;i<data.length;i++){
      let strHTML = `
      <div class="col-md-6 col-xl-4 item">
        <div class="card mycard h-100">
          <img src="${data[i].imgUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="invisible">${data[i].No}</div>
            <h5 class="card-title">${data[i].title}</h5>
          </div>
        </div>
      </div>
      `;
  
      $("#box_H").append(strHTML);
    }
  }

  //*直圖
  $.ajax({
    method: "GET",
    url: "json/Adobe-V.json",
    dataType: "JSON",
    success: showdata_V,
    error: function () {
      alert("Error - json/Adobe-V.json")
    }
  })

  function showdata_V(data) {
    // console.log(data);
    $("#box_V").empty();
    for(let i=0;i<data.length;i++){
      let strHTML = `
      <div class="col-md-6 col-xl-4 item">
        <div class="card mycard h-100">
          <img src="${data[i].imgUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="invisible">${data[i].No}</div>
            <h5 class="card-title">${data[i].title}</h5>
          </div>
        </div>
      </div>
      `;
  
      $("#box_V").append(strHTML);
    }
  }





})()



