# Weekend Health Take-home Challenge
Solution to Weekend Health Take-home Challenge

## Installation 🔌

I installed the typescript compiler in order to verify the test cases.

1. Clone the repo <br/>
   `git clone https://github.com/tdoan35/weekend-health-take-home.git`
2. Install Typescript compiler using NPM packages (or your favorite package manager)<br/>
   `npm install`
3. (Optional) Compile the .ts file into Javascript to be run on Node<br/>
   `npx tsc`<br/>
   *Note: I have already compiled the .ts files into javascript so they can be ran this repo is cloned*
5. Run the Node on the .js file to see the output in terminal!<br/>
   `node solution1.js` || `node solution2.js`

## Solution 1 ❓️

I tried to be verbose in the `solution1.ts` file as asked in the challenge document, but here I can walk through the function at a high level. The ask was to implement a function named `findWords` that accepts two arguments: 1) an input string and 2) a dictionary and return an array of words from the dictionary that can be formed by rearranging some or all of the letters in the input string. 

My approach to the problem at a high level was to: 
1. Create a helper function to create a character frequency object for a given word
2. Initialize a character frequency for the input string
3. Create a helper function to check if a word can be formed from the input character frequency object
4. Filter the dictionary to only include words that can be formed from the input character frequency object
5. Return the filtered dictionary
   
<br/>

**Time Complexity**: O(N * M), where N is the length of the input string and M is the length of the dictionary.

**Space Complexity**: O(N + M + K), where N is the length of the input string, M is the length of the dictionary, and K is the number of unique characters in the input string and dictionary.

<br/>

## Solution 2 ❓️

As I was writing out this documentation, I also thought of another approach to solving this problem using a Trie data structure. I implemented the Trie solution in the `solution2.js` file. I implemented the trie data structure solution using the following approach:

1. Define a Trie Node and Trie Class containing the following function prototypes: constructor, insert, findWords
2. Construct the Trie using the input dictionary as the input
3. Find the valid words that can be formed from the input string

Imagining the input from an example, `dictionary = ["ate", "eat", "ear"]` we can visualize the trie data structure below:<br/>

![image](https://github.com/tdoan35/weekend-health-take-home/assets/8644260/4b77a107-431c-457d-81a4-c29c076d0da4)

<br/>

**Time Complexity**: `findWords` function is O(N * M), where N is the number of words in the dictionary and M is the average length of those words. This step is done once, and the trie can be reused. `insert` funciton is O(k) where k is the length of the input string

**Space Complexity**: O(N * M), assuming there is little prefix sharing as there could be N number of words in the dictionary, all with M number of different prefixes. 

<br/>

## Notes 💼

Comparing the Time and Space complexities for both approaches we can see that both approaches actually have similar worst-case Time efficiencies. The character count map approach actually has a better worst-case Space complexity. 

**Which approach would I use?** As with most things in engineering, the answer I would have is *it depends*. 

- For smaller matching or infrequent calls I would most likely use the character count map approach. An example use case I can come up with is either string matching for a backend API call or some form data manipulation using a custom form on the frontend could be another case for the simple character count map approach.

- For larger expanded dictionaries or for high scale repeated calls, I would use the trie dictionary approach. If you were using the same dictionary and build up the trie, further calls with many words that shared common prefixes could benefit from the previous words that have already been inserted into the trie. This would be extremely useful if you were building like a typeahead search or typeahead autocompleter with preexisting data that you had. The response times could further be improved if you stored the trie in a redis cache. An example case would be a name autocompleting typeahead search or form, this would be the approach I would select in order to ensure the user experience is fast and snappy when as they type into the typeahead.

### Conclusion ☕

Thanks for reading, and the opportunity. I'd love to hear feedback and constructive criticism as I am always hoping to learn and grow! I hope to have a chance to learn more about the company / the stack / the team and to see if our cultural values align well!


