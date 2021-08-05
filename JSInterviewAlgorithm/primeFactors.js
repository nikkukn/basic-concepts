// Q - find prime factors?

const findPrimeFactors = (n) => {
    let factors = [];
    let divisor = 2;


    while(divisor<n){
        if(n%divisor===0){
            factors.push(divisor);
            n=n/divisor;
        }else {
            divisor++;
        }
    }

    return factors;
}