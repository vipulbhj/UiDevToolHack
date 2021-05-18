const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    fs.writeFile('./index.html', body, (err) => {
      if(err) {
        console.log(err);
      } else {
        console.log('File successfully written!');
      }
      response.end();
    });
  });
}).listen(3000);
