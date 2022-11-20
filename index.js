function sumOfObject(store) {
	let sum = 0;

	for (let i = 0; i < Object.values(store).length; i++) {
		sum += Object.values(store)[i];
	}
	return sum;
}

module.exports = sumOfObject;
