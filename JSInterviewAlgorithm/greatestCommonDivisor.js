// Q - How would you find the greatest common divisor of two numbers?


const greatestCommonDivisor = (a,b) => {
    let divisor = 2, greatestCommonDivisor = 1;

    if(a<2|| b<2) return 1;


    while(a>=divisor && b>= divisor){
        if(a%divisor===0 && b%divisor===0){
            greatestCommonDivisor = divisor;
        }

        divisor++;
    }

    return greatestCommonDivisor;
}


// another approach for gcd
// IMPORTANT - we are interchanging and a and b every time.
const greatestCommonDivisorWithRecurssion = (a,b) => {
    if(b===0) return a;
    else {
        return greatestCommonDivisorWithRecurssion(b, a%b)
    }
}