import assert from 'assert';
import uakari from '../lib';

describe('uakari', function () {
  it('should determine the version of the local packge', function () {
    assert.equal(uakari.version, '0.0.2', 'expect the current version to be earliest.');
  });
});
