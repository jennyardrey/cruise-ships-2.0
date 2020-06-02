/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
	it('can be instantiated', () => {
		const dover = new Port('Dover');
		const liverpool = new Port('Liverpool')
		const itinerary = new Itinerary(dover, liverpool);
		expect(new Ship(itinerary)).toBeInstanceOf(Object);
	});
	it('has a starting point', () => {
		const dover = new Port('Dover');
		const liverpool = new Port('Liverpool')
		const itinerary = new Itinerary(dover, liverpool);
		const ship = new Ship(itinerary);
		expect(ship.startingPoint).toBe(itinerary[0]);
	})
	it('can set sail', () => {
		const dover = new Port('Dover');
		const liverpool = new Port('Liverpool')
		const itinerary = new Itinerary(dover, liverpool);
		const ship = new Ship(itinerary);
		ship.setSail();
		expect(ship.previousPort).toBe(itinerary[0]);
		expect(ship.currentPort).toBeNull;
	})
	it('can dock at a port', () => {
		const dover = new Port('Dover');
		const liverpool = new Port('Liverpool')
		const itinerary = new Itinerary([dover, liverpool]);
		const ship = new Ship(itinerary);
		ship.setSail();
		ship.dock();
		expect(ship.previousPort).toBe(dover);
		expect(ship.currentPort).toBe(liverpool)
	})
});