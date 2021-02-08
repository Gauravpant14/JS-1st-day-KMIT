var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var bg = document.querySelector(".bg");

function myFunction() {
  if (btn1.checked || btn2.checked == false) {
    bg.style.background = "black";
  } else if (btn1.checked || btn2.checked) {
    bg.style.background = "white";
  }
  else if (btn1.checked ==false || btn2.checked) {
    bg.style.background = "black";
  }
  else if(btn1.checked ==false || btn2.checked== false){
    bg.style.background = "white";
  }
}

function myFunction2() {
  if (btn1.checked == false || btn2.checked) {
    bg.style.background = "black";
  } else {
    bg.style.background = "white";
  }
}
