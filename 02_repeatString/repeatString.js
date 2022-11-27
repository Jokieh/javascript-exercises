const repeatString = function(input, times) {

    let value = "";

    for (let i=0 ; i < times; i++) {

        value += input;

    }

    if (times < 0) return "ERROR";

    return value;
};

// Do not edit below this line
module.exports = repeatString;
