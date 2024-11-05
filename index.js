import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

// Example usage:
const inputSentence = "hello world from github copilot";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence); // Output: "Copilot github from world hello"

const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = data.map(person => person.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

const arrayOfArrays = [
    [{ name: 'John', age: 20 }, { name: 'Jane', age: 22 }],
    [{ name: 'Bob', age: 25 }]
];

const extractedNames = arrayOfArrays.flatMap(innerArray => innerArray.map(person => person.name));
console.log(extractedNames); // Output: ['John', 'Jane', 'Bob']