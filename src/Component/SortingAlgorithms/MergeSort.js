let auxilaryArrays = [];
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
        // setTimeout(() => {
        let Newheights = heights.map((el) => el);
        Newheights[cur] = AuxilaryArray[cur - StartIndex];
        heights = Newheights.map((el) => el);
        console.log("update heights called from mergesort");
        Ind += 1;
        funct(heights, Ind);
        // }, 50 * cur);
        // auxilaryArrays.push(heights);
    }
};

const mergeSort = (StartIndex, EndIndex, Updateheights) => {
    if (EndIndex <= StartIndex) return;
    let MidIndex = Math.floor((StartIndex + EndIndex) / 2);
    mergeSort(StartIndex, MidIndex, Updateheights);
    mergeSort(MidIndex + 1, EndIndex, Updateheights);
    Merge(StartIndex, EndIndex, MidIndex, Updateheights);
};

function MergeSort(height, f1, Updateheights) {
    f1("called from mergesort");
    // funct = Updateheights;
    funct = (parameter, index) => {
        setTimeout(() => {
            Updateheights(parameter);
        }, 10 * index);
    };
    heights = height.map((H) => H);
    auxilaryArrays = [];
    mergeSort(0, heights.length - 1, Updateheights);
    console.log(Ind);
    return auxilaryArrays;
}

export default MergeSort;
