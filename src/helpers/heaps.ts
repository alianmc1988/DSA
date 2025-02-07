export class MinHeap {
	private heap: [string, number][] = []

	constructor(arr: [string, number][]) {
		this.heap = arr.sort((a, b) => a[1] - b[1]) // Sort by frequency (ascending)
	}

	push(val: [string, number]) {
		this.heap.push(val)
		this.heap.sort((a, b) => a[1] - b[1]) // Keep it sorted
	}

	pop(): [string, number] | undefined {
		return this.heap.shift() // Remove lowest frequency element
	}

	size(): number {
		return this.heap.length
	}

	peak(): [string, number] | undefined {
		return this.heap[0]
	}
}

export class MaxHeap {
	private heap: [string, number][] = []

	constructor(arr: [string, number][]) {
		this.heap = arr.sort((a, b) => b[1] - a[1]) // Sort by frequency (descending)
	}

	push(val: [string, number]) {
		this.heap.push(val)
		this.heap.sort((a, b) => b[1] - a[1]) // Keep it sorted
	}

	pop(): [string, number] | undefined {
		return this.heap.shift() // Remove highest frequency element
	}

	size(): number {
		return this.heap.length
	}

	peak(): [string, number] | undefined {
		return this.heap[0]
	}
}
