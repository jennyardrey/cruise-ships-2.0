class Ship {
	constructor(startPort) {
		this.startingPoint = startPort;
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
	dock(port) {
		if (this.currentPort != null) {
			return "Confucious say 'one cannot dock whilst one is docked'";
		} else {
			this.currentPort = port;
			return `Welcome to ${port}, the weather is overcast`
		}

	}
}

module.exports = Ship;