// Q - How could you write a method on instance of a date which will give you next day?


Date.prototype.nextDayDate = function() {
    let currentDate = this.getDate();

    return new Date(this.setDate(currentDate+1));
}