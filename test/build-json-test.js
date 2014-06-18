'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.build_json = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/theta.json');
    var expected = grunt.file.read('test/expected/theta.json');
    test.equal(actual, expected, 'should combine JSON files by extending over the parsed objects.');

    test.done();
  },
  custom_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/delta.json');
    var expected = grunt.file.read('test/expected/delta.json');
    test.equal(actual, expected, 'should combine JSON files by extending over the parsed objects and minify.');

    test.done();
  },
  nocollapse_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/zeta.json');
    var expected = grunt.file.read('test/expected/zeta.json');
    test.equal(actual, expected, 'should combine JSON files under properties set based on the file name.');

    test.done();
  },
};
