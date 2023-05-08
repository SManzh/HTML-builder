const fsPromises = require('node:fs/promises');
const fs = require("fs");

// fsPromises.mkdir("./04-copy-directory/files-copy");


fs.readdir("./04-copy-directory/files", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    // if (fs.access("./04-copy-directory/files-copy")) {
    //   fsPromises.rmdir("./04-copy-directory/files-copy");
    // }


    fsPromises.mkdir("./04-copy-directory/files-copy");
    files.forEach(file => {
    
      fsPromises.copyFile("./04-copy-directory/files/" + file, "./04-copy-directory/files-copy/" + file);

    })
  }
});