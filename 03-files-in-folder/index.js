const fs = require("fs");
const path = require("path");

fs.readdirSync("./03-files-in-folder/secret-folder", {withFileTypes: true}).
  forEach((dirEntry) => {
    if (dirEntry.isFile()) {
      
      console.log(dirEntry.name.toString().substring(0, dirEntry.name.toString().indexOf(".")) + " - " + 
        path.extname(dirEntry.name).toString().substring(1) + " - " + fs.statSync("./03-files-in-folder/secret-folder/" + 
        dirEntry.name).size + " bytes");
      
    }
  });
