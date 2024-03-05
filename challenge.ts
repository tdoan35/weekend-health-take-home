/**
 * Finds all words in the given dictionary that can be formed from the characters of the input string.
 * @param input The input string consisting of lowercase English letters.
 * @param dictionary An array of words representing the dictionary to search through.
 * @returns An array of strings representing the words from the dictionary that can be formed with the input string's characters.
 */
const findWords = (inputString: string, dictionary: string[]): string[] => {
  // Helper function to create a character frequency object
  const createCharFreq = (word: string): { [key: string]: number } => {
    // Initialize an empty object to store the character frequencies of each character in the word
    const charFreq: { [key: string]: number } = {};
    // Iterate through each character in the word
    for (let char of word) {
      // For each character, increment the frequency count by 1 or initialize it to 1 if it doesn't exist
      charFreq[char] = charFreq[char] + 1 || 1;
    }
    // Return the character frequency object
    return charFreq;
  };

  // Create a character frequency object for the input string
  const inputCharFreq = createCharFreq(inputString);

  // Helper function to check if a word can be formed from the input character frequency object
  const canFormWord = (
    word: string,
    inputCharFrequency: { [key: string]: number }
  ): boolean => {
    // Create a character frequency object for the word
    const wordCharFreq = createCharFreq(word);
    // Iterate through each character in the word
    for (let char in wordCharFreq) {
      // If the character frequency of the word is greater than the input character frequency, return false
      if (
        !inputCharFrequency[char] ||
        wordCharFreq[char] > inputCharFrequency[char]
      )
        return false;
    }
    // If the word can be formed from the input character frequency object, return true
    return true;
  };

  // Filter the dictionary to only include words that can be formed from the input character frequency object
  const validWords = dictionary.filter((word) =>
    canFormWord(word, inputCharFreq)
  );
  // Return the valid words
  return validWords;
};
// Time Complexity: O(N * M), where N is the length of the input string and M is the length of the dictionary.
// Space Complexity: O(N + M + K), where N is the length of the input string, M is the length of the dictionary, and K is the number of unique characters in the input string and dictionary.

// Test Cases:
// Case 1:
const inputString1 = "ate";
const dictionary1 = [
  "ate",
  "eat",
  "tea",
  "dog",
  "do",
  "god",
  "goo",
  "go",
  "good",
];
console.log(findWords(inputString1, dictionary1)); // Expected Output: ["ate", "eat", "tea"]
// Case 2:
const inputString2 = "oogd";
const dictionary2 = [
  "ate",
  "eat",
  "tea",
  "dog",
  "do",
  "god",
  "goo",
  "go",
  "good",
];
console.log(findWords(inputString2, dictionary2)); // Expected Output: ["dog", "do", "god", "goo", "go", "good"]
// Case 3:
const inputString3 = "hello";
const dictionary3 = ["world", "hello", "goodbye"];
console.log(findWords(inputString3, dictionary3)); // Expected Output: ["hello"]
// Case 4:
const inputString4 = "";
const dictionary4 = ["world", "hello", "goodbye"];
console.log(findWords(inputString4, dictionary4)); // Expected Output: []
// Case 5:
const inputString5 = "a";
const dictionary5 = ["a", "b", "c"];
console.log(findWords(inputString5, dictionary5)); // Expected Output: ["a"]
// Case 6:
const inputString6 = "aaaa";
const dictionary6 = ["aaa", "aa", "a"];
console.log(findWords(inputString6, dictionary6)); // Expected Output: ["aaa", "aa", "a"]
// Case 7:
const inputString7 = "aaaa";
const dictionary7 = ["aaaaaaaa", "aaaaaaaa", "aaaaaaaa"];
console.log(findWords(inputString7, dictionary7)); // Expected Output: []
