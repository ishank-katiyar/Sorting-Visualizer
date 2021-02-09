export const Mergesort = (array) => {
	const ret = [];

	const N = array.length;

	const merge = (array, startIndex, midIndex, endIndex, ret) => {
		let I = startIndex;

		let J = midIndex + 1;

		while (I < endIndex && J <= endIndex) {
			let MN = I;

			if (array[J] < array[MN]) {
				MN = J;
			}

			ret.push([[...array], [I + 1, J + 1, startIndex + 1, endIndex + 1]]);

			for (let K = MN - 1; K >= I; K--) {
				[array[K], array[K + 1]] = [array[K + 1], array[K]];
			}

			if (MN === I) {
				I += 1;
			} else {
				J += 1;
				I += 1;
			}
		}
	};

	const mergesort = (array, startIndex, endIndex, ret) => {
		if (endIndex <= startIndex) {
			return;
		}

		const midIndex = Math.floor((startIndex + endIndex) / 2);

		mergesort(array, startIndex, midIndex, ret);

		mergesort(array, midIndex + 1, endIndex, ret);

		merge(array, startIndex, midIndex, endIndex, ret);
	};

	mergesort(array, 0, N - 1, ret);

	ret.push([[...array], []]);

	return ret;
};
