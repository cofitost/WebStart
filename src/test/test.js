const fs = require('fs');
const path = require('path');

// const data = JSON.parse(fs.readFileSync("file.json"));
// const dirPathNum = path.resolve(__dirname).split('/').indexOf('src') - 1;
console.log(__dirname);
// console.log(dirPathNum);
// const dirName = path.resolve(__dirname).split('/')[dirPathNum];
// console.log(dirName);
// const nums = data.id.split('.');
// ++nums[2];
const filename = __dirname.replace(/^.*[\\\/]/, '');
console.log(filename);
// data.id = dirName;

// fs.writeFileSync("file.json", JSON.stringify(data, null, 4));