export const majorityElement = (arr: number[]): number => {
	const numsMap: Map<number, number> = new Map()
	let res = arr[0]

	for (let i = 0; i < arr.length; i++) {
		const val = arr[i]
		numsMap.has(val)
			? numsMap.set(val, numsMap.get(val)! + 1)
			: numsMap.set(val, 1)
	}

	let rem = 0
	for (const [k, v] of numsMap.entries()) {
		if (rem < v) {
			rem = v
			res = k
		}
	}

	if (arr.length / 2 < (numsMap.get(res) || 0)) return res
	return 0
}

const sortingTheArr = (arr: number[]): number => {
	if (!arr.length) return 0
	arr.sort((a, b) => a - b)
	let bestNumber = arr[0]
	let maxcounter = 1
	let tempCounter = 1
	for (let i = 0; i < arr.length - 1; i++) {
		const current = arr[i]
		if (current === arr[i + 1]) {
			tempCounter++
		} else if (maxcounter < tempCounter) {
			bestNumber = current
			maxcounter = tempCounter
			tempCounter = 1
		}
	}
	return maxcounter > arr.length / 2 ? bestNumber : 0
}

const sortingTheArrVotingAlg = (arr: number[]): number => {
	let mayority = arr[0]
	let votes = 1

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] === mayority) {
			votes++
		} else {
			votes--
		}

		if (votes === 0) {
			mayority = arr[i]
			votes = 1
		}
	}
	let count = 0
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] === mayority) {
			count++
		}
	}

	return count > arr.length / 2 ? mayority : 0
}
