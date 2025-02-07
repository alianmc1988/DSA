import { TNodo } from '../commons'

const isSubTree = (root1: TNodo, root2: TNodo): boolean => {
	if (!root1) return !root2
	if (!root2) return false
	const fullStr = preorderTraversal(root1)
	const subStr = preorderTraversal(root2)

	return fullStr.includes(subStr)
}

const preorderTraversal = (root: TNodo): string => {
	if (!root) return 'null'
	let res = `${root.value}`
	res += preorderTraversal(root.left)
	res += preorderTraversal(root.right)
	return res
}
