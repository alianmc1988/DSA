export class Heap {
	private heap: number[]
	private compare: (a: number, b: number) => boolean

	constructor(compare: (a: number, b: number) => boolean) {
		this.heap = []
		this.compare = compare
	}

	size(): number {
		return this.heap.length
	}

	isEmpty(): boolean {
		return this.size() === 0
	}

	push(value: number) {
		this.heap.push(value)
		this.bubbleUp()
	}

	pop(): number {
		if (this.isEmpty()) {
			throw new Error('Heap is empty')
		}
		const result = this.heap[0]
		const last = this.heap.pop()
		if (!this.isEmpty() && last !== undefined) {
			this.heap[0] = last
			this.bubbleDown()
		}
		return result
	}

	private bubbleUp() {
		let current = this.size() - 1
		while (current > 0) {
			const parent = Math.floor((current - 1) / 2)
			if (this.compare(this.heap[current], this.heap[parent])) {
				break
			}
			this.swap(current, parent)
			current = parent
		}
	}

	private bubbleDown() {
		let current = 0
		while (current < this.size()) {
			let next = current
			const left = current * 2 + 1
			const right = current * 2 + 2
			if (
				left < this.size() &&
				this.compare(this.heap[left], this.heap[next])
			) {
				next = left
			}
			if (
				right < this.size() &&
				this.compare(this.heap[right], this.heap[next])
			) {
				next = right
			}
			if (next === current) {
				break
			}
			this.swap(current, next)
			current = next
		}
	}

	private swap(a: number, b: number) {
		;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
	}
}
