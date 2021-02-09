export const Insertionsort = (array) => {
	const ret = [];

	const N = array.length;

	for (let i = 1; i < N; i++) {
		const key = array[i];

		let j = i - 1;

		ret.push([[...array], [j + 1]]);

		while (j >= 0 && array[j] > key) {
			if (j + 1 !== i) {
				ret.push([[...array], [j + 1, i + 1]]);
			}

			array[j + 1] = array[j];

			j -= 1;
		}

		array[j + 1] = key;
	}

	ret.push([[...array], []]);

	return ret;
};
