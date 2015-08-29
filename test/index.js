import assert from 'assert';
import uakari from '../lib';

describe('uakari', function () {
  it('should determine the version of the local packge', function () {
    assert.notEqual(uakari.version, '0.0.4', 'expect the current version to be earliest.');
  });
});
