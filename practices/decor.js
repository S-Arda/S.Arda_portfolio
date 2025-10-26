function forsum(...args)
{
    return function sum1()
            {
                let odd = 0 ;
                for (let a = 0 ; a = args.length ; a++ ) 
                {       
                    if (args[a] % 2 == 0) 
                    {
                        odd = odd + args[a];
                    }
                }
            }    
}

function sum() {
    let i=0
    let counter=0
    while (i < arguments.length) {
        counter+=arguments[i]
        i++
    }
    return counter
}

let s = forsum(sum);
console.log(s(1,2,3,4));