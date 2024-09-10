/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head - The head of the singly-linked list.
 * @return {ListNode} - The modified linked list after inserting the GCD nodes.
 */

// Helper function to find the Greatest Common Divisor (GCD) of two values.
function findGCD(node1, node2) {
    if (node2 === 0) {
        // Base case: when node2 is 0, return node1 as the GCD.
        return node1;
    }
    // Recursively find GCD using the Euclidean algorithm.
    return findGCD(node2, node1 % node2);
}

// Function to insert nodes with the GCD of adjacent nodes' values into the linked list.
var insertGreatestCommonDivisors = function (head) {
    let prev = null; // Initialize prev as null (no previous node at the start).
    let curr = head; // Start traversing from the head node.

    // Iterate through the linked list.
    while (curr) {
        if (prev) {
            let prevValue = prev.val; // Value of the previous node.
            let currValue = curr.val; // Value of the current node.

            // Calculate the GCD of the previous and current node values.
            let gcdValue = findGCD(prevValue, currValue);

            // Create a new node with the GCD value and insert it between prev and curr.
            let newNode = new ListNode(gcdValue, curr);
            prev.next = newNode; // Point the previous node to the new GCD node.
        }

        // Move the prev pointer to the current node, and curr to the next node.
        prev = curr;
        curr = curr.next;
    }

    // Return the modified linked list with inserted GCD nodes.
    return head;
};
