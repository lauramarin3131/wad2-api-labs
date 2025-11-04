// Load the http module to create an http server.
import http from 'http';
import dotenv from 'dotenv';
import greeting from './greeting.js';

dotenv.config();
const port = process.env.PORT;

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((req, res) => {
  let lang = req.headers['accept-language'];

  const first = lang.split(',')[0] || '';
  const cleaned = first.split(';')[0].trim().toLowerCase();
  const base = cleaned.split('-')[0];

  const defaultLang='en';
   const chosen = greeting[base] ? base : defaultLang;
  if (!greeting[lang]) lang=defaultLang;
  const response={
    lang: chosen,
    message: greeting[chosen],
  };

  res.writeHead(200, {
    'Content-Type': 'text/plain', 
    'Content-Language': response.lang});
  res.end(response.message);
});

server.listen(port);

// Put a friendly message on the terminal
console.log(`Server running at ${port}`);
