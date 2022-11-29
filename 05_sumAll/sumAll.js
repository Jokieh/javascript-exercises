const sumAll = function(from, to) {

    let sum = 0;


    function isNotNumber() {

        let booleanValue;

        if (Number.isInteger(from + to)) {
            booleanValue = false;
        } else booleanValue = true;

        return booleanValue;
    }

    function isFirstHigher () {

        let booleanValue;

        if (from > to) {
            booleanValue = true;
        } else booleanValue = false;

        return booleanValue;
    }

    function isNegative () {

        let booleanValue;

        if (from < 0 || to < 0) {
            booleanValue = true;
        } else booleanValue = false;

        return booleanValue;
    }

    if ( isNotNumber() || isNegative()) {

        return 'ERROR';

    }

    if (isFirstHigher() ) {

        /**
        let placeholder;

        placeholder = from;
        from = to;
        to = placeholder;
         */

        [from, to] = [to, from];

    }

    for (let i = from; i <= to; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
