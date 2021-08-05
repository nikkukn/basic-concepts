// Q- Given a number check whether it is prime or not ?

const checkPrimeNumber = (num) => {
    let i=2;
    while(i<num){
        if(num%i===0){
            return false;
        }
        i++;
    }

    return true;
}


// Another approach by taking looping till the square root of number provided.
const checkPrimeNumberBySquareRootMethod = (num) => {
    let divisor = 3, newNum = Math.sqrt(num);

    if(num===2 || num===3){
        return true;
    }

    if(n%2 === 0) return false;

    while(divisor<=newNum){
        if(newNum%divisor ===0){
            return false;
        }
        divisor+=2;
    }

    return true;
}