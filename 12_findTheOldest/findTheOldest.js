const findTheOldest = function(inputArray) {

    let oldestAge = 0;
    let oldestName = "";
    let date = parseInt(new Date().getFullYear().toString());

    inputArray.forEach(member => {

        let yearOfDeath = 0;

        if (typeof member.yearOfDeath === 'undefined') {
            yearOfDeath = date;
        } else {
            yearOfDeath = member.yearOfDeath;
        }


       if ((yearOfDeath - member.yearOfBirth) > oldestAge) {
           oldestAge = yearOfDeath - member.yearOfBirth;
           oldestName = member.name;
       }
    })

    return inputArray.find(element => element.name == oldestName);

}



// Do not edit below this line
module.exports = findTheOldest;
