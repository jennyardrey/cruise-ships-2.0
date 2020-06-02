/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port');

describe('Ship', () => {
	it('can be instantiated', () => {
		expect(new Ship()).toBeInstanceOf(Object);
	});
	it('has a starting point', () => {
		const port = new Port('Dover');
		const ship = new Ship(port);
		expect(ship.startingPoint).toBe(port);
	})
	it('can set sail', () => {
		const port = new Port('Dover');
		const ship = new Ship(port);
		ship.setSail();
		expect(ship.previousPort).toBe(port);
		expect(ship.currentPort).toBeNull;
	})
	it('can dock at a port', () => {
		const dover = new Port('Dover');
		const liverpool = new Port('Liverpool')
		const ship = new Ship(dover);
		ship.setSail();
		ship.dock(liverpool);
		expect(ship.previousPort).toBe(dover);
		expect(ship.currentPort).toBe(liverpool)
	})
});