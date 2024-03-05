# Weekend Health Take-home Challenge
Solution to Weekend Health Take-home Challenge

## Installation

I installed the typescript compiler in order to verify the test cases.

1. Clone the repo <br/>
   `git clone https://github.com/tdoan35/weekend-health-take-home.git`
2. Install Typescript compiler using NPM packages (or your favorite package manager)<br/>
   `npm install`
3. (Optional) Compile the .ts file into Javascript to be run on Node
   `npx tsc ./challenge.ts`
4. Run the Node on the .js file to see the output in terminal!
   `node challenge.js`

## Solution Walkthrough

I tried to be verbose in the `challenge.ts` file as asked in the challenge document, but here I can walk through the function at a high level. The ask was to implement a function named `findWords` that accepts two arguments: 1) an input string and 2) a dictionary and return an array of words from the dictionary that can be formed by rearranging some or all of the letters in the input string. 

My approach to the problem at a high level was to: 
1. Create a helper function to create a character frequency object for a given word
2. Initialize a character frequency for the input string
3. Create a helper function to check if a word can be formed from the input character frequency object
4. Filter the dictionary to only include words that can be formed from the input character frequency object
5. Return the filterd dictionary

Time Complexity: O(N * M), where N is the length of the input string and M is the length of the dictionary.
Space Complexity: O(N + M + K), where N is the length of the input string, M is the length of the dictionary, and K is the number of unique characters in the input string and dictionary.

### Notes

As I was writing out this documentation, I also thought of another approach to solving this problem using a Trie data structure. Thinking through this, I believe that the trie data structure could work using the following approach:

1. Define a Trie Node and Trie Class containing the following function prototypes: constructor, insert, findWords
2. Construct the Trie using the input dictionary as the input
3. Find the valid words that can be formed from the input string

Imagining the input from test case 1, `dictionary = ["ate", "eat",...]`
       root
     /      \
    a        e
   /           \
  t              a
 /                \
e                   t 

Time Complexity: O(N * M), where N is the number of words in the dictionary and M is the average length of those words. This step is done once, and the trie can be reused.
Space Complexity: O(N * M), assuming there is little prefix sharing as there could be N number of words in the dictionary, all with M number of different prefixes. 

