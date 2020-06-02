class Ship {
	constructor(itinerary) {
		this.itinerary = itinerary;
		this.currentPort = itinerary.ports[0];
		this.previousPort = null;
	}
	setSail() {
		if (this.currentPort === null) {
			return "You are already at sea, fool!"
		} else {
			this.previousPort = this.currentPort;
			this.currentPort = null;
			return "Thems seas be choppy sailor! Bon Voyage!"
		}
	}
	dock() {
		const itinerary = this.itinerary;
		const prevPortIndex = itinerary.ports.indexOf(this.previousPort);
		this.currentPort = itinerary.ports[prevPortIndex + 1];

	}
}

module.exports = Ship;