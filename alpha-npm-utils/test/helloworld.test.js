const assert = require('assert');
const { sum } = require('../src');

describe('Given sum', () => {
	it('should return the sum of two numbers', () => {
		assert.equal(sum(1, 1), 2);		
	});
});
