const arr = [2, 5, 9, 11, 15, 17, 20, 42]

const target = 3

const findPosition = (arr: number[], target: number): number => {
	let left = 0
	let right = arr.length - 1

	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		if (arr[mid] === target) {
			return mid
		} else if (arr[mid] < target) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return left
}

console.log(findPosition(arr, target)) // 1
