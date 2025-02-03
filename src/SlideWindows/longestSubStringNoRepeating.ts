const longestSubNoRepeating = (str: string): number => {
	const indexMap: Map<string, number> = new Map()
	let maxCounter = 0

	let tail = 0
	let head = tail

	while (head < str.length) {
		const indexOfElement = indexMap.get(str[head])
		if (indexOfElement !== undefined) {
			const diff = head - tail
			maxCounter = Math.max(maxCounter, diff)
			tail = Math.max(indexOfElement + 1, tail)
		}
		indexMap.set(str[head], head)
		head++
	}
	maxCounter = Math.max(maxCounter, head - tail)

	return maxCounter
}
