/*
Create a basic markdown editor in Next.js with the following features:
- Use react hooks
- Create a state for markdown with the default text "type markdown here"
- A text area where users can write markdown 
- Show a live preview of the markdown text as I type
- Support for basic markdown syntax like headers, bold, and italics 
- Use React markdown npm package 
- The markdown text and resulting HTML should be saved in the component's state and updated in real-time 
*/

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Home() {
  const [markdown, setMarkdown] = useState('type markdown here')

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <ReactMarkdown source={markdown} />
    </div>
  )
}

// take a sentence as input
// return the sentence with the words reversed
// the sentence should start with a capital letter

// "Hello World" -> "World Hello"
// "The quick brown fox" -> "Fox Brown Quick The"

const reverseSentence = (sentence) => {
  let words = sentence.split(' ')
  let reversedWords = words.reverse()
  let reversedSentence = reversedWords.join(' ')
  return reversedSentence
}

console.log(reverseSentence("Hello World"))

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

// Map through an array of arrays of objects
// Example: Extract names from the data array
// Desired outcome: ['John', 'Jane', 'Bob']
const names = data.flat().map(person => person.name)
console.log(names)