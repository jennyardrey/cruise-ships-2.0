/* globals describe it expect */
const Ship = require('../src/Ship.js');

describe('Ship', () => {
	it('can be instantiated', () => {
		expect(new Ship()).toBeInstanceOf(Object);
	});
	it('has a starting point', () => {
		const ship = new Ship('Dover');
		expect(ship.startingPoint).toBe('Dover');
	})
});