const fs = require("fs");
const path = require("path");
const fsPromises = require('node:fs/promises');

fsPromises.mkdir("./06-build-page/project-dist");
fsPromises.mkdir("./06-build-page/project-dist/assets");
fsPromises.mkdir("./06-build-page/project-dist/assets/fonts/");
fsPromises.mkdir("./06-build-page/project-dist/assets/img/");
fsPromises.mkdir("./06-build-page/project-dist/assets/svg/");

fs.readdirSync("./06-build-page/styles/").
  forEach((file) => {
    if ((path.extname(file))===".css") {
    let content = fs.readFileSync("./06-build-page/styles/" + file, "utf8");
    fsPromises.appendFile("./06-build-page/project-dist/style.css", content, (err) =>{
      if (err) throw err;
  });
  }

})

fs.readdir("./06-build-page/assets/fonts/", (err, files) => {
  if (err) {
    console.log(err);
  } else {

    files.forEach(file => {
      fsPromises.copyFile("./06-build-page/assets/fonts/" + file, "./06-build-page/project-dist/assets/fonts/" + file);
    })
  }
});

fs.readdir("./06-build-page/assets/img/", (err, files) => {
  if (err) {
    console.log(err);
  } else {

    files.forEach(file => {  
      fsPromises.copyFile("./06-build-page/assets/img/" + file, "./06-build-page/project-dist/assets/img/" + file);
    })
  }
});

fs.readdir("./06-build-page/assets/svg/", (err, files) => {
  if (err) {
    console.log(err);
  } else {

    files.forEach(file => {
      fsPromises.copyFile("./06-build-page/assets/svg/" + file, "./06-build-page/project-dist/assets/svg/" + file);
    })
  }
});
