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