interface INodo {
	value: number
	left: INodo | null
	right: INodo | null
}

const rangeSum = (
	root: INodo | null,
	lowRange: number,
	highRange: number,
): number => {
	if (!root) return 0
	let sum = { value: 0 }

	dfs(root, lowRange, highRange, sum)

	return sum.value
}

const dfs = (
	nodo: INodo,
	lowRange: number,
	highRange: number,
	sum: { value: number },
) => {
	if (nodo.value >= lowRange && nodo.value <= highRange) {
		sum.value += nodo.value
	}
	if (nodo.left && nodo.value > lowRange) {
		dfs(nodo.left, lowRange, highRange, sum)
	}
	if (nodo.right && nodo.value < highRange) {
		dfs(nodo.right, lowRange, highRange, sum)
	}
}
