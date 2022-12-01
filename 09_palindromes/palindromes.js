const palindromes = function (input) {

    input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").toLowerCase();

    let isPalindrome = false;

    let j = input.length-1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] == input[j]) {
                isPalindrome = true;
            } else {
                isPalindrome = false;
                break;
            }
        j--;
    }

    return isPalindrome;

};

// Do not edit below this line
module.exports = palindromes;
