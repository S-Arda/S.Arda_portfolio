let x = 5;
let y = 60;
let test = function () 
{
    let x = 10;
    let y = 55;
    return x + y
}

console.log(test());
console.log(x+y);

let out = function()
{
    let y = 5;
    function z()
    {
        console.log(y)
        y++
    }
    return z;
}

let result = out();
result();
result();
result();
result();
result();