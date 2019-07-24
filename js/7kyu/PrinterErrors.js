function printerError(s) {
	let denominator = s.length;
	let errors = 0;
	for (let i in s) {
		s.charCodeAt(i) >= 110 || s.charCodeAt(i) <= 96 ? (errors += 1) : null;
	}
	return `${errors}/${denominator}`;
}
