let list1 = document.getElementById('list1');
let list2 = document.getElementById('list2');
let list3 = document.getElementById('list3');
let list4 = document.getElementById('list4');
let list5 = document.getElementById('list5');
let list6 = document.getElementById('list6');
let list7 = document.getElementById('list7');
let list8 = document.getElementById('list8');
min=1;
max=2;
let b = 0;
setInterval(()=>{
  center.innerHTML=b;
  list1.onmouseover=function(){
    let a = Math.round(getRandom(min, max));
    if (a=="1") {
      list1.style.background = "red";
      list1.innerHTML="любит";
      b=b+1;
    }
    if (a=="2") {
      list1.style.background = "blue";
      list1.innerHTML="не любит";
    }
  }
  list1.onmouseout=function(){
    list1.style.background = "white";
  }
  list2.onmouseover=function(){
    let a = Math.round(getRandom(min, max));
    if (a=="1") {
      list2.style.background = "red";
      list2.innerHTML="любит";
      b=b+1;
    }
    if (a=="2") {
      list2.style.background = "blue";
      list2.innerHTML="не любит";
    }
  }
  list2.onmouseout=function(){
    list2.style.background = "white";
  }
  list3.onmouseover=function(){
    let a = Math.round(getRandom(min, max));
    if (a=="1") {
      list3.style.background = "red";
      list3.innerHTML="любит";
      b=b+1;
    }
    if (a=="2") {
      list3.style.background = "blue";
      list3.innerHTML="не любит";
    }
  }
  list3.onmouseout=function(){
    list3.style.background = "white";
  }
  list4.onmouseover=function(){
    let a = Math.round(getRandom(min, max));
    if (a=="1") {
      list4.style.background = "red";
      list4.innerHTML="любит";
      b=b+1;
    }
    if (a=="2") {
      list4.style.background = "blue";
      list4.innerHTML="не любит";
    }
  }
  list4.onmouseout=function(){
    list4.style.background = "white";
  }
  list5.onmouseover=function(){
    let a = Math.round(getRandom(min, max));
    if (a=="1") {
      list5.style.background = "red";
      list5.innerHTML="любит";
      b=b+1;
    }
    if (a=="2") {
      list5.style.background = "blue";
      list5.innerHTML="не любит";
    }
  }
  list5.onmouseout=function(){
    list5.style.background = "white";
  }
  list6.onmouseover=function(){
    let a = Math.round(getRandom(min, max));
    if (a=="1") {
      list6.style.background = "red";
      list6.innerHTML="любит";
      b=b+1;
    }
    if (a=="2") {
      list6.style.background = "blue";
      list6.innerHTML="не любит";
    }
  }
  list6.onmouseout=function(){
    list6.style.background = "white";
  }
  list7.onmouseover=function(){
    let a = Math.round(getRandom(min, max));
    if (a=="1") {
      list7.style.background = "red";
      list7.innerHTML="любит";
      b=b+1;
    }
    if (a=="2") {
      list7.style.background = "blue";
      list7.innerHTML="не любит";
    }
  }
  list7.onmouseout=function(){
    list7.style.background = "white";
  }
  list8.onmouseover=function(){
    let a = Math.round(getRandom(min, max));
    if (a=="1") {
      list8.style.background = "red";
      list8.innerHTML="любит";
      b=b+1;
    }
    if (a=="2") {
      list8.style.background = "blue";
      list8.innerHTML="не любит";
    }
  }
  list8.onmouseout=function(){
    list8.style.background = "white";
  }
},33)
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
