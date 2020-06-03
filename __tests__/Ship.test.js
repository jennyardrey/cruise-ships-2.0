/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
	let dover;
	let liverpool;
	let itinerary;
	let ship;
	beforeEach(() => {
		dover = new Port('Dover');
		liverpool = new Port('Liverpool')
		itinerary = new Itinerary([dover, liverpool]);
		ship = new Ship(itinerary);
	})
	it('can be instantiated', () => {
		expect(new Ship(itinerary)).toBeInstanceOf(Object);
	});
	it('has a starting point', () => {
		expect(ship.startingPoint).toBe(itinerary[0]);
	})
	it('can set sail', () => {
		ship.setSail();
		expect(ship.previousPort).toBe(itinerary.ports[0]);
		expect(ship.currentPort).toBeNull;
	})
	it('can dock at a port', () => {
		ship.setSail();
		ship.dock();
		expect(ship.previousPort).toBe(dover);
		expect(ship.currentPort).toBe(liverpool)
		expect(liverpool.ships).toContain(ship);
	})
	it('it cannot sail further than itinerary', () => {
		ship.setSail();
		ship.dock();
		expect(() => ship.setSail()).toThrowError('YOUR HOLIDAY IS OVER GO HOME')
	})
	it('gets added to a port on instantiation', () => {
		expect(dover.ships).toContain(ship);
	})
	it('it gets removed from a port when it sets sail', () => {
		ship.setSail();
		expect(dover.ships).not.toContain(ship);
	})
});