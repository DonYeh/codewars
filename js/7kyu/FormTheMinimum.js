function minValue(values) {
	// let myList = Array.from(new Set(values))
	// let mySortedList = myList.sort((a,b) => a - b)
	// let smallestNumber = parseInt(mySortedList.join(''))
	// let smallestNumber

	return (smallestNumber = parseInt(
		Array.from(new Set(values))
			.sort((a, b) => a - b)
			.join("")
	));
}
