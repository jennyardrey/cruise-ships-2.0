class Ship {
	constructor(port) {
		this.startingPoint = port;
		this.currentPort = this.startingPoint;
		this.previousPort = "";
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
}

module.exports = Ship;