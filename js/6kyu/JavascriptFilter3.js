function searchNames(logins) {
	const filteredArray = logins.filter((char, i, arr) => {
		return i % 2 == 1 && arr[i - 1].match(/^\.|\.$/);
	});

	return filteredArray;
}
