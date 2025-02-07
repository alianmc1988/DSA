const longestSubNoRepeating = (str: string): number => {
	const indexMap: Map<string, number> = new Map()
	let maxCounter = 0

	let start = 0
	let end = 0

	while (end < str.length) {
		const indexOfElement = indexMap.get(str[end])
		if (indexOfElement !== undefined) {
			const diff = end - start
			maxCounter = Math.max(maxCounter, diff)
			start = Math.max(indexOfElement + 1, start)
		}
		indexMap.set(str[end], end)
		end++
	}
	maxCounter = Math.max(maxCounter, end - start)

	return maxCounter
}
