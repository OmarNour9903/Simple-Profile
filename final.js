let btn1 = document.getElementById("red");
btn1.addEventListener("click", function (){
    document.body.style.backgroundColor = "red"
});
let btn2 = document.getElementById("green");
btn2.addEventListener("click", function (){
    document.body.style.backgroundColor = "green"
});
let btn3 = document.getElementById("blue");
btn3.addEventListener("click", function (){
    document.body.style.backgroundColor = "blue"
});
const content = document.getElementById("edu")
let click = document.getElementById("click");
click.addEventListener("click",function(){
   if(content.style.display ==='none'){
      content.style.display = 'block';
      click.textContent = 'hide';
   } else {
      content.style.display ='none';
      click.textContent = 'show';
   }
})
