# browserify-p

[![Build Status](https://travis-ci.org/rjz/browserify-p.svg?branch=master)](https://travis-ci.org/rjz/browserify-p)

Cross-platform convenience: create output directories before invoking
[`browserify`](https://github.com/browserify/browserify). Your mileage may vary.

See: [browserify/watchify#269][issue]

## Usage

```ShellSession
$ npm install -g browserify browserify-p
$ browserify-p entry.js -o ./some/path/entry.js
```

## License

WTFPL

[issue]: https://github.com/browserify/watchify/issues/269
