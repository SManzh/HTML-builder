const fs = require("fs");
const { stdin, stdout } = process;

stdout.write('Введите что-нибудь\n');
stdin.on('data', data => {

  fs.appendFile("02-write-file/hello.txt", data, function(error){
    let data = fs.readFileSync("02-write-file/hello.txt", "utf8");
    console.log(data);
 });

});

 
