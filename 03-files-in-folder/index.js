const fs = require("fs");
const path = require("path");
const fsPromises = fs.promises;

fsPromises.readdir("./03-files-in-folder/secret-folder", {withFileTypes: true}).
  then((dirEntry) => {
    dirEntry.forEach(dirEntry => {
          if (dirEntry.isFile()) { 
            const filePath = path.join(__dirname, 'secret-folder', dirEntry.name);
            const fileName = path.basename(filePath);
            const ext = path.extname(filePath);

            fsPromises.stat(filePath).then(res => {
                console.log(`${fileName.replace(ext, '')} - ${ext.replace('.', '')} - ${Number(res.size)} bytes`)
            })
      
    }
  })
  });
