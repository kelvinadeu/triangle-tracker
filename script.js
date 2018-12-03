
function tracker(){
  var a =parseInt(document.getElementById("one").value);
  var b =parseInt(document.getElementById("two").value);
  var c =parseInt(document.getElementById("three").value);

  var sides=[];

  sides.push("a");
  sides.push("b");
  sides.push("c");

var results=document.querySelector("#final");

   if(a+b<=c || b+c<=a || a+c<=b){
  results.innerHTML="its not a triangle";
}
else if(a===b && b===c && c===a){
  results.innerHTML="its Equilateral triangle";
}
else if(b===a || a===c  || c===a){
  results.innerHTML="its Isosceles triangle";
}
else if(a!==b && b!==c && c!==a){
  results.innerHTML="its Scalene triangle";
}
}
function refresh(){
  location.reload();
}
