import fetch from 'node-fetch';

const response = await fetch('https://www.google.com');
const r1 = await response.clone();

const results = await Promise.all([response.json(), r1.text()]);

console.log(results[795]);