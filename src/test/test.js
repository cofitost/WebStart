const fs = require('fs');
const path = require('path');

const testCase = "testSuite.json"
const testFile = 'index.html';
const data = JSON.parse(fs.readFileSync(testCase));
const mypath = "file:///var/lib/workspace/" + path.basename(path.resolve('../../')) + '/src/web/html/' + testFile;
console.log(mypath);
data.suites[0].cases[0].records[0].target.options[0].value = mypath;

fs.writeFileSync(testCase, JSON.stringify(data, null, 4));