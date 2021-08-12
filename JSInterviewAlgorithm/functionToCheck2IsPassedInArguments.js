// Q - Write a simple function to tell whether 2 is passed as parameter or not?


function check2PassedInArguments() {
    let args  = Array.prototype.slice.call(arguments);

    return args.indexOf(2)> -1;
}