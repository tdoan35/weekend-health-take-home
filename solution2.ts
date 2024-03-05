class TrieNode {
  children: Record<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // Inserts a word into the trie.
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true; // Mark the end of a word.
  }

  // Finds words in the trie that can be formed with the characters in the input string.
  findWords(input: string): string[] {
    const results: Set<string> = new Set();
    const charCount: Record<string, number> = {};

    // Count occurrences of each character in the input string.
    for (const char of input) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }

    // Helper function to search through the trie.
    const search = (node: TrieNode, path: string) => {
      if (node.isEndOfWord) {
        results.add(path);
      }

      for (const char in node.children) {
        if (charCount[char] > 0) {
          charCount[char]--;
          search(node.children[char], path + char);
          charCount[char]++; // Backtrack
        }
      }
    };

    search(this.root, "");
    return Array.from(results);
  }
}

const dictionaryOne = [
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
const trie = new Trie();
for (const word of dictionaryOne) {
  trie.insert(word);
}

// Test Cases:
// Case 1:
let inputStringOne = "ate";
console.log(trie.findWords(inputStringOne)); // Expected Output: ["ate", "eat", "tea"]
// Case 2:
let inputStringTwo = "oogd";
console.log(trie.findWords(inputStringTwo)); // Expected Output: ["dog", "do", "god", "goo", "go", "good"]
// Case 3:
const dictionaryTwo = ["world", "hello", "goodbye"];
const trie2 = new Trie();
for (const word of dictionaryTwo) {
  trie2.insert(word);
}
let inputStringThree = "hello";
console.log(trie2.findWords(inputStringThree)); // Expected Output: ["hello"]
// Case 4:
let inputStringFour = "";
console.log(trie2.findWords(inputStringFour)); // Expected Output: []
// Case 5:
const dictionaryThree = ["a", "b", "c"];
const trie3 = new Trie();
for (const word of dictionaryThree) {
  trie3.insert(word);
}
let inputStringFive = "a";
console.log(trie3.findWords(inputStringFive)); // Expected Output: ["a"]
// Case 6:
const dictionaryFour = ["aaa", "aa", "a"];
const trie4 = new Trie();
for (const word of dictionaryFour) {
  trie4.insert(word);
}
let inputStringSix = "aaaa";
console.log(trie4.findWords(inputStringSix)); // Expected Output: ["aaa", "aa", "a"]
// Case 7:
const dictionaryFive = ["aaaaaaaa", "aaaaaaaa", "aaaaaaaa"];
const trie5 = new Trie();
for (const word of dictionaryFive) {
  trie5.insert(word);
}
let inputStringSeven = "aaaa";
console.log(trie5.findWords(inputStringSeven)); // Expected Output: []
