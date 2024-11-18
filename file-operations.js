const fs = require('fs'); // This loads the File System module

// Create a file and write "Hello Node" to it
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created and data written!');
});

fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // It should print "Hello Node"
  });
  