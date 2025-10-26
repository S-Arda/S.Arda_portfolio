// Decorator 
function decor(pr){
    return function (...args){
        console.log(...args)
        let data = [...args]
        let res= pr(data[0]+4,data[1]+4)
        return res
    }
}

function ml(x,y) {
    console.log(x*y)
}
const fn = decor(ml) 
// fn(4,5)
// ml(2,2)
function canPlayGame(fn) {
    return function(...args){
        let res
        if(args[1].toLowerCase() =='vip' && args[0]>=200 ){
            res = fn(...args)
            return res
        }else if(args[1].toLowerCase() !=='vip'){
            res = fn(...args)
            return res
        }else{
            console.log("VIP zone price is 200$")
        }
        // new logic for fn
        // return res
    }
}

function cs2(price,zone) {
    console.log("Let's go")
}
let cs2Dec = canPlayGame(cs2)
cs2Dec(1000,'vip')