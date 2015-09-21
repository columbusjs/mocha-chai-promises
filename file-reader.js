var fs = require('fs');
var q = require('q');

function readFile(filename) {

  var deferred = q.defer();

  fs.readFile(filename, { encoding : 'utf-8' }, function(err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });

  return deferred.promise;
}

exports.readFile = readFile;
