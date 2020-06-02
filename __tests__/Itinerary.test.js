/* globals describe it expect */
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port');

describe('Itinerary', () => {
	it('can be instantiated', () => {
		expect(new Itinerary()).toBeInstanceOf(Object);
	})
	it('has ports', () => {
		const dover = new Port('Dover');
		const liverpool = new Port('Liverpool')
		const itinerary = new Itinerary([liverpool, dover])
		expect(itinerary.ports[0]).toBe(liverpool);
		expect(itinerary.ports[1]).toBe(dover);
	})
})