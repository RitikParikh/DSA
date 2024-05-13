//*________________________________________________________________
//* Programming Question :  
//*________________________________________________________________

//? Q: Write a function checkTriangleType that takes three parameters representing the lengths of sides of triangle. The function should return a string indicating the type of triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", "scalene".
//todo Constraints:
//? If all sides are equal length, return equilateral
//? If only two  sides are equal length, return isosceles
//? If all three sides are different length, return scalene

const checkTriangleType = (side1, side2, side3)=>{
   if(side1 === side2 && side2 === side3) return "equilateral";
   else if(side1 === side2 || side2 === side3 || side1 === side3) return "isosceles";
   return "scalene";
}

console.log(checkTriangleType(3,3,3));
console.log(checkTriangleType(3,4,3));
console.log(checkTriangleType(5,8,6));
