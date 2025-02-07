import { TNodeList } from '../helpers/List.interface'

export const detectCycle = (head: TNodeList): boolean => {
	let slow: TNodeList = head
	let fast: TNodeList = head

	while (fast !== null && fast.next !== null) {
		slow = slow!.next // Move slow pointer by 1 step
		fast = fast.next.next // Move fast pointer by 2 steps

		if (slow === fast) {
			// If they meet, cycle detected
			return true
		}
	}
	return false // If fast reaches null, no cycle
}

export const detectPointOfCycle = (head: TNodeList): TNodeList | null => {
	let slow: TNodeList = head
	let fast: TNodeList = head

	while (fast !== null && fast.next !== null) {
		slow = slow!.next // Move slow pointer by 1 step
		fast = fast.next.next // Move fast pointer by 2 steps

		if (slow === fast) {
			// If they meet, cycle detected
			break
		}
	}

	if (slow === null || fast === null) {
		return null
	}

	slow = head
	while (slow != fast) {
		slow = slow!.next
		fast = fast!.next
	}
	return slow
}
