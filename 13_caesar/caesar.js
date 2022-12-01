const caesar = function(inputString, shift) {

    let characterArray = [];

    const isUpperCase = (string) => /^[A-Z]*$/.test(string);

    for (let i = 0; i < 26 ; i++) {
        characterArray.push(String.fromCharCode(i+97));
    }


    function shiftCharacter (character) {
        let shiftedCharacter = "";
        let upperCase = false;

        if (isUpperCase(character)) upperCase = true;
        character = character.toLowerCase();

        let characterIndex = characterArray.indexOf(character);

        if (characterArray.includes(character)) {

            if ((shift + characterIndex) < 0) {

                let shiftedIndex =  ((shift + characterIndex + characterArray.length) % characterArray.length);
                shiftedCharacter = characterArray[shiftedIndex];

            } else if ((shift + characterIndex) > characterArray.length-1) {

                let shiftedIndex = ((shift + characterIndex - characterArray.length) % characterArray.length);
                shiftedCharacter = characterArray[shiftedIndex];

            } else shiftedCharacter = characterArray[characterIndex+shift];

            if (upperCase) {
                shiftedCharacter = shiftedCharacter.toUpperCase();
            }
            return shiftedCharacter;

        } else return character;

    }

    let outputString = "";

    for (let i = 0; i < inputString.length; i++) {
        outputString += shiftCharacter(inputString.charAt(i));
    }

    return outputString;
};

//caesar("aaa", 1);

// Do not edit below this line
module.exports = caesar;
