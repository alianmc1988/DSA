export const rotateArray = (arr: number[], rotations: number): number[] => {
	const arrLength = arr.length
	const remainderModule = rotations % arrLength

	if (arrLength < 1 || remainderModule === 0) return arr

	if (rotations < arrLength) {
		arr.push(...arr.splice(0, rotations)!)
	} else {
		rotateArray(arr, remainderModule)
	}
	return arr
}

const bruteForce = (arr: number[], rotations: number): number[] => {
	if (arr.length < 1) return arr
	for (let i = 0; i < rotations; i++) {
		arr.push(arr.shift()!)
	}
	return arr
}
