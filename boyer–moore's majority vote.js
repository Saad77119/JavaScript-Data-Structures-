/**
 * @func BoyerMoorMajorityVote
 * @param number[] parameters 
 */
function BoyerMoorMajorityVote(parameters) {
    const minMajorityVote = Math.floor(parameters.length / 2);
    const BoyerMoorMajority = new Map();
    for (x of parameters) {
        if (BoyerMoorMajority[x] >= minMajorityVote) {
            return x;
        }
        if (BoyerMoorMajority[x]) {
            ++BoyerMoorMajority[x]
        } else {
            BoyerMoorMajority[x] = 1
        }
    }
    return "NO MAJORITY FOUND";
}
const BoyerMoorMajority = BoyerMoorMajorityVote([1, 1, 1, 1, 3, 3, 4])
console.log("🚀 ~ file: boyer–moore's majority vote.js:20 ~ BoyerMoorMajority:", BoyerMoorMajority)