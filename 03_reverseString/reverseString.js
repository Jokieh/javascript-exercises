const reverseString = function(string) {

    let reversed = "";

    for (let i = string.length; i > 0; i--) {

        reversed += string[i-1];

    }

    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
