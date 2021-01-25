import timeoutCollection from "time-events-manager";

let heights = [];
let funct = () => {};
let Ind = 0;

const Merge = (StartIndex, EndIndex, MidIndex) => {
	let I = StartIndex;
	let J = MidIndex + 1;
	let Len = EndIndex - StartIndex + 1;
	let AuxilaryArray = [];
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
		let Newheights = [...heights];
		Newheights[cur] = AuxilaryArray[cur - StartIndex];
		heights = [...Newheights];
		// console.log("update heights called from mergesort");
		Ind += 1;
		funct(heights, Ind);
	}
};

const mergeSort = (StartIndex, EndIndex) => {
	if (EndIndex <= StartIndex) return;
	let MidIndex = Math.floor((StartIndex + EndIndex) / 2);
	mergeSort(StartIndex, MidIndex);
	mergeSort(MidIndex + 1, EndIndex);
	Merge(StartIndex, EndIndex, MidIndex);
};

function MergeSort(height, Updateheights) {
	// console.log("merge sort called");
	Ind = 0;
	funct = (parameter, index) => {
		setTimeout(() => {
			Updateheights(parameter);
		}, 50 * index);
	};
	heights = [];
	heights = [...height];
	mergeSort(0, heights.length - 1, Updateheights);
}

export default MergeSort;
