export const maxSubstring = (arr: number[]): number => {
	let max = arr[0]
	let productLeft = 1
	let productRight = 1
	for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
		productLeft = productLeft === 0 ? 1 : productLeft
		productRight = productRight === 0 ? 1 : productRight

		productLeft *= arr[i]
		productRight *= arr[j]
		max = Math.max(max, Math.max(productLeft, productRight))
	}
	return max
}

// const arr = [1,2,3,4]

export const productOfElementsExeptSelf = (arr: number[]): number[] => {
	const result: number[] = []

	for (let i = 0; i < arr.length; i++) {
		let mult = 1
		for (let j = 0; j < arr.length; j++) {
			if (i === j) continue
			mult *= arr[j]
		}
		result.push(mult === 0 ? 0 : mult)
	}
	return result
}

export const productOfEle = (arr: number[]): number[] => {
	const result: number[] = []
	let hasZero = false

	let totalResult = 1
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			hasZero = true
			continue
		}
		totalResult *= arr[i]
	}

	for (let i = 0; i < arr.length; i++) {
		if (hasZero && arr[i] != 0) {
			result.push(0)
		} else if (arr[i] === 0) {
			result.push(totalResult)
		} else {
			result.push(totalResult / arr[i])
		}
	}

	return result
}
