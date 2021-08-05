// Q- If you have a function that generate random number between 1 to 5 how could u generate random number 1 to 7 by using that function?
function random5() {
    return Math.random()*4+1
}

function random7() {
    return 5+ random5()/5*2;
}