import { Nodo } from './Nodo'

export class MyQueue {
	private first: Nodo | null = null
	private last: Nodo | null = null

	enqueue(value: number) {
		const newNode = new Nodo(value)
		if (this.last != null) {
			this.last.next = newNode
		}

		this.last = newNode
		if (this.first === null) {
			this.first = this.last
		}
	}

	dequeue(): number {
		if (this.first === null) {
			throw new Error('Queue empty')
		}

		const el = this.first.value
		this.first = this.first.next
		if (this.first === null) {
			this.last = null
		}
		return el
	}
}
