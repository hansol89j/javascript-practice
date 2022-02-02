const title = document.querySelector(".hello:first-child h1");

title.innerText = "Hello";

function handleTitleClick(){
  alert("Clicked!");
}

function handleMouseEnter(){
  console.log("Mouse Enter");
}

function handleMouseLeave(){
  console.log("Mouse Leave");
}

title.onclick = handleTitleClick;
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);