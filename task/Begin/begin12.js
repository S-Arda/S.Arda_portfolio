// Даны катеты прямоугольного треугольника a и b. Найти его гипотенузу c и периметр P:    c = √a**2 +  b**2 , P = a + b + c.

let a = 5;
let b = 7;

let c = Math.sqrt(a**2+b**2);
let p = a + b + c ; 
console.log(`c = ${c} and P = ${p}`);
