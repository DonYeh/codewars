function nthSmallest(arr, pos) {
	return arr.sort((a, b) => b - a)[arr.length - pos];
}
