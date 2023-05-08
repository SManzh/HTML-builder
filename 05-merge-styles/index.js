const fs = require("fs");
const path = require("path");
const fsPromises = require('node:fs/promises');

fs.readdirSync("./05-merge-styles/styles/").
  forEach((file) => {
    if ((path.extname(file))===".css") {
      // if (fs.existsSync("./05-merge-styles/project-dist/bundle.css")){
      //   fsPromises.rm("./05-merge-styles/project-dist/bundle.css");
      // }
    let content = fs.readFileSync("./05-merge-styles/styles/" + file, "utf8");
    fsPromises.appendFile("./05-merge-styles/project-dist/bundle.css", content, (err) =>{
      if (err) throw err;
  });
  }
})