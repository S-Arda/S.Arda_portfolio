// Дано трехзначное число. Вывести вначале его последнюю цифру (единицы), а затем — его среднюю цифру (десятки).

let n = 222;
let o = n % 110;
let t = n % 101;
console.log(`it's last number ${o} and it's midle number ${t}`);
