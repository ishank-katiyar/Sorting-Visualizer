export const Bubblesort = (array) => {
	const ret = [];

	const N = array.length;

	for (let i = 0; i < N - 1; i++) {
		for (let j = 1; j < N - i; j++) {
			ret.push([[...array], [j + 1, j + 2, N - i]]);

			if (array[j - 1] > array[j]) {
				[array[j - 1], array[j]] = [array[j], array[j - 1]];
			}
		}
	}

	ret.push([array, []]);

	return ret;
};
