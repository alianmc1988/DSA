const maximumJump = (stair: number[]): boolean => {
	let stairlength = stair.length
	let finalPosition = stair.length - 1
	for (let i = stairlength - 2; i >= 0; i--) {
		if (stair[i] + i >= finalPosition) {
			finalPosition = i
		}
	}

	return finalPosition === 0
}

const minJumps = (stair: number[]): number => {
	let n = stair.length
	if (n === 1) return 0 // Already at the last index

	let jumps = 0 // Number of jumps taken
	let currEndIndex = 0 // Current farthest index within the current jump
	let maxReachIndex = 0 // Farthest index reachable

	for (let i = 0; i < n - 1; i++) {
		// Don't need to process last index
		maxReachIndex = Math.max(maxReachIndex, i + stair[i]) // Update the farthest we can go

		if (i === currEndIndex) {
			// End of current jump range
			jumps++ // Take a jump
			currEndIndex = maxReachIndex // Update the new range

			if (currEndIndex >= n - 1) return jumps // If we reach the last index
		}
	}

	return -1 // If unreachable
}
