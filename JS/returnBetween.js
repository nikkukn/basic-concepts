/*
Given an array of numbers implement the following.
const list = [1,2,3,4,5,6,7,8]
const filteredArray = list.filter(between(3, 6)) // [4,5]
*/

function between(start, end) {

    return function (value, index) {
        if (index > start && value < end)
            return value
    }

}