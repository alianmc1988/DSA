export class Nodo {
	public left: Nodo | null = null
	public right: Nodo | null = null
	constructor(public readonly data: number) {}
}

export const sumOfLeftLeaves = (nodo: Nodo | null): number => {
	if (nodo === null) return 0
	let sum = 0

	if (nodo.left != null) {
		if (isLeave(nodo.left)) {
			sum += nodo.left.data
		} else {
			sum += sumOfLeftLeaves(nodo.left)
		}
	}

	if (nodo.right != null) {
		sum += sumOfLeftLeaves(nodo.right)
	}

	return sum
}

const isLeave = (node: Nodo) => {
	return node.left === null && node.right === null
}
