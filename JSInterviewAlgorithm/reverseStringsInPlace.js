// Q- If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse;


function reverseInPlace(str) {
    return str.split(" ").reverse().join(" ").split("").reverse().join("");
}