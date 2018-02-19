'use strict';
var appRoot = process.cwd();
var json = require(`${appRoot}/scripts/json/getAllDrugs.json`)

var fs = require('fs');

const keys = Object.keys(json.data[0]);
const newJson = []

keys.forEach((key, index) => {
    var obj = json.data[0][key]
    index = index +1;
    obj.id = index;
    var drugInfo = json.data[0][key];
    newJson.push(drugInfo);
});

json = newJson;

fs.writeFile('AllDrugsCorrectFormat.json', JSON.stringify(json), function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('file saved successfully');
    process.exit(0);
  }
});
