//Write a function to reverse a string without using any built-in reverse functions.

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const String = "Hello, world!";
const reversed = reverseString(String);
console.log(reversed); 
//----------------------------------------------------------------//

//Implement a function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces and punctuation.

function palindrome(string) {
    let newString =string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverse = newString.split("").reverse().join("");
   
    return newString === reverse; 
 }
 
 const string ="race car";
 const isPalindrome = palindrome(string);
 
 console.log(isPalindrome); 
 

//----------------------------------------------------------------//
//Create a function to find the longest common prefix string amongst an array of strings. 
//If there is no common prefix, return an empty string.

function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }

    let longest = strs[0]; 
    for (let i = 1; i < strs.length; i++) {
        const current = strs[i];
        let j = 0;

        while (j < longest.length && j < current.length && longest[j] === current[j]) {
            j++;
        }
        longest = longest.slice(0, j);

        if (longest === "") {
            return " ";
        }
    }

    return longest;
}

// Example usage:
const strings1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings1));

const strings2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strings2)); 

//----------------------------------------------------------------//