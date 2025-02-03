import { TNodo } from '../commons'

const isBinarySearchTree = (root: TNodo): boolean => {
	if (!root) return false
	const queue: Array<TNodo> = []

	queue.push(root)

	while (queue.length) {
		const current = queue.shift()
		let leftCheck = false
		let rightCheck = false
		if (current) {
			if (current.left === null || current.left.value < current.value) {
				leftCheck = true
			}
			if (current.right === null || current.right.value > current.value) {
				rightCheck = true
			}

			if (!leftCheck && !rightCheck) {
				return false
			}

			current.left && queue.push(current.left)
			current.right && queue.push(current.right)
		}
	}
	return true
}
