const fs = require('fs');
const path = require('path');

const { stdin, stdout, exit} = require('process');
const absPath = path.join(__dirname, 'text.txt');

const output = fs.createWriteStream(absPath);

stdout.write('Введите что-нибудь\n');

stdin.on('data', data => {

  if (data.toString().trim()==='exit') {
    goodLuck();
  }
  output.write(data);
});

process.on('SIGINT', goodLuck);

function goodLuck() {
  stdout.write('\nУдачи')
  exit();
}



 
