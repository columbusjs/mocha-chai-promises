var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

describe("reader", function() {

  var subject;

  beforeEach(function() {
    subject = require('./file-reader');
  });

  describe("#readFile()", function() {

    context("when reading a valid file", function() {

      var promise;

      beforeEach(function() {
        promise = subject.readFile("file1");
      });

      it("fulfills the promise", function() {
        return expect(promise).to.be.fulfilled;
      });

      it("fulfills the promise with the contents of the file", function() {
        return expect(promise).to.eventually.equal('Alice\n');
      });

    });

    context("when reading an invalid file", function() {

      var promise;

      beforeEach(function() {
        promise = subject.readFile("file42");
      });

      it("rejects the promise", function() {
        return expect(promise).to.be.rejected;
      });

      it("rejects the promise with an file not found error", function() {
        return expect(promise).to.be.rejectedWith("Error: ENOENT, open 'file42'");
      });

    });

  });

});



describe("vente skinny iced chai pumpkin mocha latte", function() {

  it("knows what is true", function() {
    expect(true).to.be.true;
  });

  it("knows what is foo", function() {
    expect("foo").to.equal("foo");
  });

});
