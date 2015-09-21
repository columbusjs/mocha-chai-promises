var reader = require('./file-reader');

var s;

reader.readFile('file1').then(function(data) {
  s = data;
  return reader.readFile('file2');
}).then(function(data) {
  return s + data;
}).then(function(data) {
  console.log(data);
}).fail(function(err) {
  console.log(err);
});
