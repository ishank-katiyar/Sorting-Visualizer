import timeoutCollection from "time-events-manager";

let heights = [];
let funct = () => {};
let Ind = 0;

const merge = (StartIndex, EndIndex, MidIndex) => {
	let I = StartIndex;
	let J = MidIndex + 1;
	const Len = EndIndex - StartIndex + 1;
	const AuxilaryArray = [];
	for (let i = 0; i < Len; i++) {
		if (I <= MidIndex && J <= EndIndex) {
			let MN;
			if (heights[I] <= heights[J]) {
				MN = heights[I];
				I++;
			} else {
				MN = heights[J];
				J++;
			}
			AuxilaryArray.push(MN);
		} else if (I <= MidIndex) {
			AuxilaryArray.push(heights[I]);
			I++;
		} else if (J <= EndIndex) {
			AuxilaryArray.push(heights[J]);
			J++;
		}
	}
	console.assert(AuxilaryArray.length === Len, {
		AuxilaryArray: AuxilaryArray,
		Len: Len,
	});
	console.assert(I === MidIndex + 1 && J === EndIndex + 1, {
		I: I,
		J: J,
	});
	for (let cur = StartIndex; cur <= EndIndex; cur++) {
		const Newheights = [...heights];
		Newheights[cur] = AuxilaryArray[cur - StartIndex];
		heights = [...Newheights];
		Ind += 1;
		funct(heights, Ind);
	}
};

const mergeSort = (StartIndex, EndIndex) => {
	if (EndIndex <= StartIndex) return;
	const MidIndex = Math.floor((StartIndex + EndIndex) / 2);
	mergeSort(StartIndex, MidIndex);
	mergeSort(MidIndex + 1, EndIndex);
	merge(StartIndex, EndIndex, MidIndex);
};

function Mergesort(arrayOfHeights, updatearrayOfHeights, setIsSorting) {
	Ind = 0;
	funct = (parameter, index) => {
		setTimeout(() => {
			updatearrayOfHeights(parameter);
			if (timeoutCollection.timeoutCollection.getScheduled().length === 1) {
				setIsSorting(false);
			}
		}, 30 * index);
	};
	heights = [...arrayOfHeights];
	setIsSorting(true);
	mergeSort(0, heights.length - 1);
}

export default Mergesort;
