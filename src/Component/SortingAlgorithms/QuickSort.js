export const Quicksort = (array) => {
	const ret = [];

	const N = array.length;

	const paritition = (array, low, high, ret) => {
		const pivot = array[high];

		let I = low - 1;

		for (let J = low; J < high; J += 1) {
			ret.push([[...array], [I + 1, J + 1, low + 1, high + 1]]);

			if (array[J] < pivot) {
				I += 1;

				[array[I], array[J]] = [array[J], array[I]];
			}
		}

		[array[I + 1], array[high]] = [array[high], array[I + 1]];

		ret.push([[...array], [I + 2, high + 1]]);

		return I + 1;
	};

	const quicksort = (array, low, high, ret) => {
		if (low < high) {
			const Pivot = paritition(array, low, high, ret);

			quicksort(array, low, Pivot - 1, ret);

			quicksort(array, Pivot + 1, high, ret);
		}
	};

	quicksort(array, 0, N - 1, ret);

	ret.push([[...array], []]);

	return ret;
};
