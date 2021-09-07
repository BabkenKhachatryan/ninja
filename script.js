let parent = document.querySelector(".parent")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let x1 = document.querySelector(".x1")
let x2 = document.querySelector(".x2")


function a() {
    img1.style.margin = "120px 0px";
}
let inter = setInterval(() => {
    a();
}, 2000);

btn1.addEventListener("click", () => {
    img1.style.margin = "-200px 0px";
    clearInterval(btn1);

});
function b() {
    img1.style.margin = "120px 0px";
    img2.style.margin = "0px 0px"
}
let inter1 = setInterval(() => {
    b();
}, 10000);

btn2.addEventListener("click", () => {
    img1.style.margin = "120px 550px";
    img2.style.margin = "0px 550px"
    clearInterval(btn2);

});

function c() {
    x1.style.transform = "translateX(1250px)"
    
}
let inter2 = setInterval(() => {
    c();
}, 1000);

btn3.addEventListener("click", () => {
    x1.style.display = "block"
    x1.style.transform = "translateX(0px) rotate(-360deg)"
    clearInterval(btn3);
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        x2.style.transform = "translateX(0px)"
      resolve('h');
    },1000);
    btn3.addEventListener("click", () => {
        x2.style.display = "block"
    x2.style.transform = "translateX(1350px) rotate(360deg)"
        clearTimeout(btn3);
    });
  });
  let xx = document.querySelector(".xx")
  let btn4 = document.querySelector(".btn4")
  function o() {
    xx.style.margin = "-150px auto"
    
}
let inter3 = setInterval(() => {
    o();
}, 2000);

btn4.addEventListener("click", () => {
    xx.style.display = "block"
    xx.style.transform = "translateX(0px)"
    clearInterval(btn4);
});

