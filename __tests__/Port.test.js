/* globals describe it expect */
const Port = require("../src/Port.js");

describe('Port', () => {
	it('can be instantiated', () => {
		expect(new Port()).toBeInstanceOf(Object);
	})
	it('has a name', () => {
		const port = new Port('Liverpool');
		expect(port.name).toBe('Liverpool');
	})
	it('adds a ship', () => {
		const port = new Port('Liverpool');
		const ship = {};
		port.addShip(ship);
		expect(port.ships).toContain(ship);
	})
	it('removes a ship', () => {
		const port = new Port('Liverpool');
		const ship = {};
		port.removeShip(ship);
		expect(port.ships).not.toContain(ship);

	})
})