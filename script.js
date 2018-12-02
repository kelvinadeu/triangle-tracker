function triangle(){
var sides =[];
sides.push(document.getElementById("num1").value);
sides.push(document.getElementById("num2").value);
sides.push(document.getElementById("num3").value);
var [a,b,c] = sides;
var display = document.getElementById("display");
var explanation = document.getElemntById("explanation");
if(a.length === 0 || b.length === 0 || c.length === 0)
}
else{
  a = parsefloat(a);
  b = parsefloat(b);
  c = parsefloat(c);
  track(a,b,c);
}
