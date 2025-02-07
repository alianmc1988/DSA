import { MaxHeap } from '../helpers/heaps'

function reorganizeString(s: string): string {
	const charMap = new Map<string, number>()

	// Step 1: Count frequencies
	for (const char of s) {
		charMap.set(char, (charMap.get(char) || 0) + 1)
	}

	const maxHeap = new MaxHeap([...charMap.entries()])

	// Step 2: Check if possible to rearrange
	const maxFreq = Math.max(...charMap.values())
	if (maxFreq > Math.ceil(s.length / 2)) {
		return '' // Not possible if any character appears more than (n+1)/2 times
	}

	let result: string[] = []
	let queue: [string, number][] = []

	// Step 3: Build the result string
	while (maxHeap.size() > 0) {
		const [char, freq] = maxHeap.pop()!
		result.push(char)

		// Store the previous character to reinsert later
		queue.push([char, freq - 1])

		// When the queue has enough elements (to avoid adjacent duplicates), reinsert
		if (queue.length >= 2) {
			const [prevChar, prevFreq] = queue.shift()!
			if (prevFreq > 0) {
				maxHeap.push([prevChar, prevFreq])
			}
		}
	}

	return result.join('')
}
