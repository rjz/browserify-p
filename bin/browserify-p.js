#!/usr/bin/env node

var path = require('path');
var spawn = require('child_process').spawn;
var mkdirp = require('mkdirp');
var minimist = require('minimist');

var args = process.argv.slice(2);
var flags = minimist(args, {
  alias: {
    o: 'output'
  },
});

var outdir = __dirname;
if (flags.o) {
  outdir = path.resolve(process.cwd(), path.dirname(flags.o));
}

mkdirp(outdir, function (err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  spawn('browserify', args, { stdio: 'inherit' });
});
