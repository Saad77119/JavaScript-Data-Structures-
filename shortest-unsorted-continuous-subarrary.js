const input = [2, 6, 4, 8, 10, 9, 15];

function findUnsortedSubarray(nums) {
    //remove edge index from min and max
    const min = Math.min(...nums.slice(1));
    const max = Math.max(...nums.slice(0, -1));
    let maxPointIndex = 0;
    let minPointIndex = 0;
    nums.map((n, index) => {
        if (min < n && minPointIndex === 0) {
            minPointIndex = index
        }
        if (max > nums[(nums.length - 1) - index] && maxPointIndex === 0) {
            maxPointIndex = (nums.length - 1) - index
        }
    })
    const result = maxPointIndex - minPointIndex < 0 ?
        0 :
        maxPointIndex - minPointIndex + 1;
    return result;
}
const a = findUnsortedSubarray(input);