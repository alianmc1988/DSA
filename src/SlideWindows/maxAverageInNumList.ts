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

const isDequeueEmpty = (queue: number[]): boolean => {
	return queue.length <= 0
}

const maxValuesInSlidingWindows = (nums: number[], k: number): number[] => {
	const res: number[] = []
	const maxValueIndexDequeue: number[] = []

	// If the dequeue is not empty and dequeue.lenth excedes the k number of items, then it removes the first element
	// So its means that the first element does not belong to the active windows
	for (let i = 0; i < nums.length; i++) {
		if (
			!isDequeueEmpty(maxValueIndexDequeue) &&
			maxValueIndexDequeue[0] < i - k + 1
		) {
			maxValueIndexDequeue.shift()
		}

		// While the dequeue is not empty and number at the last position index value stored in dequeue
		// is less than the current evaluated number
		// then it will remove that last value index from the dequeue
		// it means that those values will not be grather that the current value
		while (
			!isDequeueEmpty(maxValueIndexDequeue) &&
			nums[maxValueIndexDequeue[maxValueIndexDequeue.length - 1]] < nums[i]
		) {
			maxValueIndexDequeue.pop()
		}

		// After eliminating those index values from dequeue that its references in nums where less that nums[i]
		// we proceed to add the new index to the rigth in the dequeue
		maxValueIndexDequeue.push(i)

		// If the current evaluation index is greater than or equal the windowSize (k - 1 -> since is 0 base)
		// Its means that we have the full size of the window
		// then we know that the first index value in dequeue has the reference to the current max value
		if (i >= k - 1) {
			// take the  left most index value stored in dequeue to find the correspondant number
			// And add it to the response array
			res.push(nums[maxValueIndexDequeue[0]])
		}
	}
	return res
}
const maxValuesInSlidingWindowsBruteForce = (
	nums: number[],
	k: number,
): number[] => {
	const res: number[] = []

	for (let i = 0; i <= nums.length - k; i++) {
		let max = nums[i]
		for (let j = i; j < i + k; j++) {
			max = Math.max(max, nums[j])
		}
		res.push(max)
	}

	return res
}

const maxHelper = (nums: number[]): number => {
	let max = nums[0]
	for (let num of nums) {
		max = Math.max(max, num)
	}
	return max
}

export { findMaxAverage, findMaxAverageBruteForce, maxValue, numbers }
