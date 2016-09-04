import assert from 'assert';
import uakari from '../lib';

describe('uakari', function () {
  it('should determine the version of the local package', function () {
    assert.notEqual(uakari.version, '0.0.0', 'expect the current version to non default.');
  });
});
