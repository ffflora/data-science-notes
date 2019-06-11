// var rect = {
//     perimeter:(x,y) => (2*(x+y)),
//     area:(x,y) =>(x*y)
// };
var rect = require('./rect');
function solve_rect(l,b){
  console.log('Solving for rect with l = ' +l +' and b = '+ b );
  if (l<=0 || b<=0){
    console.log('Rect dim should be greater than 0');
  }
  else {
    console.log('The area of the rect is '+ rect.area(l,b));
    console.log('The perimter of the rect is '+ rect.perimeter(l,b));
  }
}

solve_rect(3,6)
solve_rect(199,22)
