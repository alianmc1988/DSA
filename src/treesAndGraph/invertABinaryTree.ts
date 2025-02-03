import { TNodo } from '../commons'

const invertBinaryTree = (root: TNodo): TNodo | null => {
	if (!root) return null
	const temp: TNodo | null = root.left
	root.left = root.right
	root.right = temp
	root?.left && invertBinaryTree(root.left)
	root?.right && invertBinaryTree(root.right)

	return root
}

const iterativeApproach = (root: TNodo): TNodo | null => {
	if (!root) return null
	const queue: Array<TNodo | null> = []

	queue.push(root)

	while (queue.length > 0) {
		const el = queue.shift()
		if (el) {
			const temp = el.left
			el.left = el.right
			el.right = temp
			queue.push(el.left)
			queue.push(el.right)
		}
	}

	return root
}
