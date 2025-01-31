class SlidingWindowMedian {
	private minHeap: number[] = [] // Para la mitad mayor
	private maxHeap: number[] = [] // Para la mitad menor

	// Método para agregar un número al heap correcto
	private addNumber(num: number) {
		if (this.maxHeap.length === 0 || num <= -this.maxHeap[0]) {
			this.maxHeap.push(-num)
			this.maxHeap.sort((a, b) => a - b) // Simula heap con orden
		} else {
			this.minHeap.push(num)
			this.minHeap.sort((a, b) => a - b) // Simula heap con orden
		}
		this.rebalanceHeaps()
	}

	// Método para eliminar un número de los heaps
	private removeNumber(num: number) {
		if (num <= -this.maxHeap[0]) {
			this.maxHeap = this.maxHeap.filter((x) => x !== -num)
		} else {
			this.minHeap = this.minHeap.filter((x) => x !== num)
		}
		this.rebalanceHeaps()
	}

	// Método para mantener los heaps balanceados
	private rebalanceHeaps() {
		if (this.maxHeap.length > this.minHeap.length + 1) {
			this.minHeap.push(-this.maxHeap.shift()!)
			this.minHeap.sort((a, b) => a - b)
		} else if (this.minHeap.length > this.maxHeap.length) {
			this.maxHeap.push(-this.minHeap.shift()!)
			this.maxHeap.sort((a, b) => a - b)
		}
	}

	// Método para obtener la mediana actual
	private getMedian(): number {
		if (this.maxHeap.length === this.minHeap.length) {
			return (-this.maxHeap[0] + this.minHeap[0]) / 2
		} else {
			return -this.maxHeap[0]
		}
	}

	// Método principal para calcular la mediana deslizante
	public slidingWindowMedian(nums: number[], k: number): number[] {
		const result: number[] = []
		for (let i = 0; i < nums.length; i++) {
			this.addNumber(nums[i])
			if (i >= k - 1) {
				result.push(this.getMedian())
				this.removeNumber(nums[i - k + 1])
			}
		}
		return result
	}
}

// Implementar una clase Heap para el ejercicio de mediana deslizante

// class Heap {
// 	private heap: number[] = []
// 	public compare: (a: number, b: number) => boolean

// 	constructor(compare: (a: number, b: number) => boolean) {
// 		this.compare = compare
// 	}

// 	size(): number {
// 		return this.heap.length
// 	}

// 	isEmpty(): boolean {
// 		return this.size() === 0
// 	}

// 	peek(): number {
// 		if (this.isEmpty()) {
// 			throw new Error('Heap is empty')
// 		}
// 		return this.heap[0]
// 	}

// 	push(value: number): void {
// 		this.heap.push(value)
// 		this.bubbleUp()
// 	}

// 	pop(): number {
// 		const result = this.heap[0]
// 		const last = this.heap.pop()
// 		if (!this.isEmpty() && last !== undefined) {
// 			this.heap[0] = last
// 			this.bubbleDown()
// 		}
// 		return result
// 	}

// 	private bubbleUp() {
// 		let current = this.size() - 1
// 		while (current > 0) {
// 			const parent = Math.floor((current - 1) / 2)
// 			if (this.compare(this.heap[current], this.heap[parent])) {
// 				break
// 			}
// 			this.swap(current, parent)
// 			current = parent
// 		}
// 	}

// 	private bubbleDown() {
// 		let current = 0
// 		while (current < this.size()) {
// 			let next = current
// 			const left = current * 2 + 1
// 			const right = current * 2 + 2
// 			if (
// 				left < this.size() &&
// 				this.compare(this.heap[left], this.heap[next])
// 			) {
// 				next = left
// 			}
// 			if (
// 				right < this.size() &&
// 				this.compare(this.heap[right], this.heap[next])
// 			) {
// 				next = right
// 			}
// 			if (next === current) {
// 				break
// 			}
// 			this.swap(current, next)
// 			current = next
// 		}
// 	}

// 	private swap(a: number, b: number) {
// 		;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
// 	}
// }

// class SlidingWindowMedian {
// 	private minHeap: Heap
// 	private maxHeap: Heap

// 	constructor() {
// 		this.minHeap = new Heap((a, b) => a > b) // Min-heap
// 		this.maxHeap = new Heap((a, b) => a < b) // Max-heap
// 	}

// 	// Método para agregar un número al heap correcto
// 	private addNumber(num: number) {
// 		if (this.maxHeap.isEmpty() || num <= this.maxHeap.peek()) {
// 			this.maxHeap.push(num)
// 		} else {
// 			this.minHeap.push(num)
// 		}
// 		this.rebalanceHeaps()
// 	}

// 	// Método para mantener los heaps balanceados
// 	private rebalanceHeaps() {
// 		if (this.maxHeap.size() > this.minHeap.size() + 1) {
// 			this.minHeap.push(this.maxHeap.pop())
// 		} else if (this.minHeap.size() > this.maxHeap.size()) {
// 			this.maxHeap.push(this.minHeap.pop())
// 		}
// 	}

// 	// Método para obtener la mediana actual
// 	private getMedian(): number {
// 		if (this.maxHeap.size() === this.minHeap.size()) {
// 			return (this.maxHeap.peek() + this.minHeap.peek()) / 2
// 		} else {
// 			return this.maxHeap.peek()
// 		}
// 	}

// 	// Método principal para calcular la mediana deslizante
// 	public slidingWindowMedian(nums: number[], k: number): number[] {
// 		const result: number[] = []
// 		const windowsSize = k - 1
// 		for (let i = 0; i < nums.length; i++) {
// 			this.addNumber(nums[i])
// 			if (i >= windowsSize) {
// 				result.push(this.getMedian())
// 				const numberToRemove = nums[i - windowsSize]
// 				this.removeFromHeaps(numberToRemove)
// 			}
// 		}
// 		return result
// 	}

// 	// Método para eliminar un número específico de un heap
// 	private removeFromHeaps(num: number) {
// 		if (num <= this.maxHeap.peek()) {
// 			this.maxHeap.pop()
// 		} else {
// 			this.minHeap.pop()
// 		}
// 		this.rebalanceHeaps()
// 	}
// }

const slidingWindowMedian = new SlidingWindowMedian()
const nums = [1, -1, 3, 5, -1, -3, 6, 2, -4]

console.log(slidingWindowMedian.slidingWindowMedian(nums, 4)) // [2, 2, 3, 1, 1, 2, 2]
