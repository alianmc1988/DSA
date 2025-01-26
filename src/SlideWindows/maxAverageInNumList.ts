const numbers: Array<number> = [1, 12, -5, -6, 50, 3]

// BRUTE FORCE
const findMaxAverageBruteForce = (
	nums: number[],
	subSetSize: number,
): number => {
	let max = 0
	for (let i = 0; i < nums.length; i++) {
		let sum = 0
		for (let j = 0; j < subSetSize; j++) {
			if (!(i + (subSetSize - 1) > nums.length - 1)) {
				sum += nums[i + j]
			} else {
				i = nums.length
				j = subSetSize
			}
		}

		if (sum != 0) {
			max = Math.max(max, sum / subSetSize)
		}
	}

	if (max < 0) {
		return 0
	}
	return max
}

// SLIDING WINDOW
const findMaxAverage = (nums: number[], subSetSize: number): number => {
	if (nums.length < subSetSize) return 0

	let maxSum = 0
	// O(k)
	for (let i = 0; i < subSetSize; i++) {
		maxSum += nums[i]
	}

	let currentSum = maxSum
	// O(n-k)
	for (let i = subSetSize; i < nums.length; i++) {
		currentSum += nums[i] - nums[i - subSetSize]
		maxSum = Math.max(maxSum, currentSum)
	}

	return maxSum / subSetSize
}

const maxValue = (nums: number[], subSetSize: number): number => {
	let maxSum = 0

	for (let i = 0; i < subSetSize; i++) {
		maxSum += nums[i]
	}

	let currentSum = maxSum
	for (let j = subSetSize; j < nums.length; j++) {
		currentSum += nums[j] - nums[j - subSetSize]
		maxSum = Math.max(maxSum, currentSum)
	}

	return maxSum <= 0 ? 0 : maxSum
}

export { findMaxAverage, findMaxAverageBruteForce, maxValue, numbers }
