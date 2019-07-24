function getEvenNumbers(numbersArray) {
	// filter out the odd numbers
	const filteredArray = numbersArray.filter(num => num % 2 == 0);
	return filteredArray;
}
