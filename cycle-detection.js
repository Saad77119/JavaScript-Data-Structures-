function ListNode(val) {
    this.val = val
    this.next = null
}

const node0 = new ListNode(0)
const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)
const node6 = new ListNode(6)
const node7 = new ListNode(7)


const list = node0
list.next = node1
list.next.next = node2
list.next.next.next = node3
list.next.next.next.next = node4
list.next.next.next.next.next = node5
list.next.next.next.next.next.next = node6
list.next.next.next.next.next.next.next = node7
list.next.next.next.next.next.next.next.next = node2



var listHasCycle = function(head) {
    let iterativeNode = head.next
    let comparitiveNode = head.next.next

    //check is cycle exist
    while (iterativeNode !== comparitiveNode) {
        iterativeNode = iterativeNode.next;
        comparitiveNode = comparitiveNode.next.next
    }

    //where does the cycle start?
    let cycleStartPosition = 0
    iterativeNode = head
    console.log("🚀 ~ file: cycle-detection.js:48 ~ listHasCycle ~ fast:", comparitiveNode.val);
    while (iterativeNode !== comparitiveNode) {
        iterativeNode = iterativeNode.next
        comparitiveNode = comparitiveNode.next
        cycleStartPosition += 1

    }

    // 3. what is the length of the cycle?
    let cycleLength = 1
    comparitiveNode = iterativeNode.next

    while (iterativeNode !== comparitiveNode) {
        comparitiveNode = comparitiveNode.next
        cycleLength += 1

    }

    return {
        cycleLength,
        cycleStartPosition,
    }
}

const res = listHasCycle(list)
console.log(`cycle start position: ${res.cycleStartPosition}`)
console.log("\n")
console.log(`cycle length: ${res.cycleLength}`)