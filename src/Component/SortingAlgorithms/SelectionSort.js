export const Selectionsort = (array) => {
	const ret = [];

	const N = array.length;

	for (let I = 0; I < N - 1; I += 1) {
		let minIndex = I;

		for (let J = I + 1; J < N; J += 1) {
			ret.push([[...array], [J + 1, I + 1]]);

			if (array[J] < array[minIndex]) {
				minIndex = J;
			}
		}

		[array[minIndex], array[I]] = [array[I], array[minIndex]];

		ret.push([[...array], [I + 1]]);
	}

	ret.push([[...array], []]);

	return ret;
};
