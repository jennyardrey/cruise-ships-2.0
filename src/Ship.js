class Ship {
	constructor(itinerary) {
		this.itinerary = itinerary;
		this.currentPort = itinerary.ports[0];
		this.previousPort = null;
		this.currentPort.addShip(this);
	}

	setSail() {
		const itinerary = this.itinerary;
		const itinEnd = itinerary.ports.length - 1;
		const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
		if (this.currentPort === null) {
			return "You are already at sea, fool!"
		} if (currentPortIndex === itinEnd) {
			throw new Error('YOUR HOLIDAY IS OVER GO HOME');
		} else {
			this.previousPort = this.currentPort;
			this.currentPort = null;
			this.previousPort.removeShip(this);
			return "Thems seas be choppy sailor! Bon Voyage!"
		}
	}
	dock() {
		const itinerary = this.itinerary;
		const prevPortIndex = itinerary.ports.indexOf(this.previousPort);

		this.currentPort = itinerary.ports[prevPortIndex + 1];
		this.currentPort.addShip(this);
	}
}

module.exports = Ship;