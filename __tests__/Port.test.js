/* globals describe it expect */
const Port = require("../src/Port.js");

describe('Port', () => {
	let port;
	let ship;
	beforeEach(() => {
		port = new Port('Liverpool');
		ship = jest.fn();
	})
	it('can be instantiated', () => {
		expect(new Port()).toBeInstanceOf(Object);
	})
	it('has a name', () => {
		expect(port.name).toBe('Liverpool');
	})
	it('adds a ship', () => {
		port.addShip(ship);
		expect(port.ships).toContain(ship);
	})
	it('removes a ship', () => {
		port.removeShip(ship);
		expect(port.ships).not.toContain(ship);

	})
})