const removeFromArray = function (array, ...args) {

    let i,j;

    for (i = (array.length-1); i >= 0; i--) {

        for (j=0; j < args.length; j++) {

            if (args[j] === array[i]) {

                array.splice(i,1);

            }
        }
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
