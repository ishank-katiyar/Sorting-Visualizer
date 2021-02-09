export const Heapsort = (array) => {
	const ret = [];

	const N = array.length;

	const heapify = (array, N, index, ret) => {
		let largest = index;

		const left = 2 * index + 1;

		const right = 2 * index + 2;

		let colorindex = [largest + 1];

		if (left < N) {
			colorindex = [...colorindex, left + 1];
		}

		if (right < N) {
			colorindex = [...colorindex, right + 1];
		}

		if (left < N && array[left] > array[largest]) {
			largest = left;
		}

		if (right < N && array[right] > array[largest]) {
			largest = right;
		}

		ret.push([[...array], [...colorindex]]);

		if (largest !== index) {
			[array[index], array[largest]] = [array[largest], array[index]];

			heapify(array, N, largest, ret);
		}
	};

	for (let i = Math.floor(N / 2) - 1; i >= 0; i -= 1) {
		heapify(array, N, i, ret);
	}

	for (let i = N - 1; i > 0; i -= 1) {
		[array[0], array[i]] = [array[i], array[0]];

		heapify(array, i, 0, ret);
	}

	ret.push([[...array], []]);

	return ret;
};
