(function exportPort() {
	function Port(name) {
		this.name = name;
		this.ships = [];
	}
	Port.prototype = {
		addShip(ship) {
			this.ships.push(ship);
		},
		removeShip(ship) {
			this.ships.pop(ship);
		}
	}
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Port;
	} else {
		window.Port = Port;
	}

}());
