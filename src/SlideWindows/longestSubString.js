"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullString = exports.longestSubsString = void 0;
var fullString = 'AAAHHIBC';
exports.fullString = fullString;
var longestSubsString = function (str, k) {
    var maxLength = 0;
    var start = 0;
    var longestSubstring = '';
    var charCount = new Map();
    for (var end = 0; end < str.length; end++) {
        var currentChar = str[end];
        /*
        Add:
            if character exists then add plus one to its value
            else add the character and set its value to 1
        */
        charCount.set(currentChar, (charCount.get(currentChar) || 0) + 1);
        while (charCount.size > k) {
            /*
                if the Size of the charCount map excedes the given lenth
                then create a start pointer to track the first character of the sliceWindow
                then decrease the value of the character at start index
                then
                    if the character at start index === 0
                    then the character is removed
                
                then the start index pointer is increased by one
            */
            var startChar = str[start];
            charCount.set(startChar, charCount.get(startChar) - 1);
            if (charCount.get(startChar) === 0) {
                charCount.delete(startChar);
            }
            start++;
        }
        if (charCount.size === k && end - start + 1 > maxLength) {
            /**
             * If the size of the charcount is equal the givenLength
             * And the substraction of the end with the start pointer plus one (indexes) ig greater that the maxLength
             * Then the maxLength = end pointer minus the start pointer plus one (sum of indexes)
             */
            maxLength = end - start + 1;
            /*
                Slice the string from the start pointer to the end pointer +1
            */
            longestSubstring = str.slice(start, end + 1);
        }
    }
    return { maxLength: maxLength, longestSubstring: longestSubstring };
};
exports.longestSubsString = longestSubsString;
