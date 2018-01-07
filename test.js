var assert = require('assert');
var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;
var rimraf = require('rimraf');

var TEST_DIR = path.join(__dirname, 'test_run');
var OUT_PATH = path.join(TEST_DIR, '/p.js');

rimraf(TEST_DIR, function (err) {
  assert(!err, 'error clearing test directory');
  spawn(path.join('bin', 'browserify-p.js'), ['p.js', '-o', OUT_PATH], {
    stdio: ['inherit'],
  }).on('exit', function (code) {
    assert.equal(code, 0, 'browserify-p existed with status != 0');
    fs.stat(OUT_PATH, function (err, stat) {
      assert(!err, 'error inspecting output');
      assert(stat.isFile(), 'output is not file');
      rimraf(TEST_DIR, function (err) {
        assert(!err, 'error clearing test directory');
        console.log('All is well!');
      });
    });
  });
});
