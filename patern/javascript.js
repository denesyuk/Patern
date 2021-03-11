
class Mersedes {

	constructor(model, price, maxSpeed) {
		this.model = model;
		this.price = price;
		this.maxSpeed = maxSpeed;
	}
}

class MersedesFactory {
	create(type) {
		if (type === 'w124')
			return new Mersedes(type, 10200, 110);

		if (type === 'sport200')
			return new Mersedes(type, 30600, 180);

    if (type === 'e260')
			return new Mersedes(type, 60000, 210);
	}
}

// Денесюк Петро Романович
// КІ-312