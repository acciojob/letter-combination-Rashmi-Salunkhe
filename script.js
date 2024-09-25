function letterCombinations(input_digit) {
    // Map of digit to corresponding letters
    const digitToLetters = {
        '0': '0', '1': '1', 
        '2': 'abc', '3': 'def', 
        '4': 'ghi', '5': 'jkl', 
        '6': 'mno', '7': 'pqrs', 
        '8': 'tuv', '9': 'wxyz'
    };

    // Base case: if the input is empty, return an empty array
    if (!input_digit) {
        return [];
    }

    // Recursive helper function to generate combinations
    function combine(currentCombination, nextDigits) {
        if (nextDigits.length === 0) {
            // If there are no more digits, we have a valid combination
            return [currentCombination];
        } else {
            // Get letters that the current digit can represent
            const currentDigit = nextDigits[0];
            const letters = digitToLetters[currentDigit];
            let combinations = [];
            
            // Loop through each letter corresponding to the current digit
            for (let letter of letters) {
                // Combine the current letter with the result of the next digits
                combinations = combinations.concat(combine(currentCombination + letter, nextDigits.slice(1)));
            }
            
            return combinations;
        }
    }

    // Start the recursive function with an empty string and the input digits
    return combine('', input_digit);
}

// Testing the function with the given input "23"
console.log(letterCombinations("23")); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

module.exports = letterCombinations;
