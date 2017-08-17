
var assert = require('assert');
var replace = require('../src/next-replace-to-char');

describe('replace-to-char', function() {
  it('phone 3, -3 replace to *', function() {
    var phone = "13800006888";
    assert.equal( replace(phone,3,-3,'*'),'138*****888' );
  });
});
