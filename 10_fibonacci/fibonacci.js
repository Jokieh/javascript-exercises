const fibonacci = function(number) {

    if (number < 0) return "OOPS";

    number = parseInt(number);

    let fibonacci = [1,1];

    if (typeof number == "string") {
        number = parseInt(number);
    }

    if (number >= 3) {
        for (let i = 2; i <= number-1; i++) {
            fibonacci.push(fibonacci[fibonacci.length-2] + fibonacci[fibonacci.length-1]);
        }
    }

    return fibonacci[fibonacci.length-1];

};

// Do not edit below this line
module.exports = fibonacci;
