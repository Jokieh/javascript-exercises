const getTheTitles = function(inputArray) {

    let outputArray = [];

    inputArray.forEach(element => {
        outputArray.push(element.title);
    })

    return outputArray;
};

// Do not edit below this line
module.exports = getTheTitles;
