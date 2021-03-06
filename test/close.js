var test = require('tap').test
var fs$close = require('fs').close;
var fs$closeSync = require('fs').closeSync;
var fs = require('../');

test('`close` is patched correctly', function(t) {
  t.notEqual(fs.close, fs$close, 'patch close');
  t.notEqual(fs.closeSync, fs$closeSync, 'patch closeSync');
  t.end();
})
