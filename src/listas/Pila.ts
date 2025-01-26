import { Nodo, Nodes } from './Nodo'

export class MyStack {
	private top: Nodo | null = null

	push(value: number): void {
		let newNode = new Nodo(value, this.top)
		this.top = newNode
	}

	pop(): number {
		if (this.top === null) {
			throw new Error('Empty Stack')
		}
		const curr = this.top
		this.top = this.top.next
		return curr.value
	}

	peek(): number {
		if (this.top === null) {
			throw new Error('Empty Stack')
		}
		return this.top.value
	}

	isEmpty(): boolean {
		return this.top === null
	}

	length(): number {
		if (this.isEmpty()) return 0
		let count = 1
		let current = this.top
		while (current?.next) {
			count++
			current = current.next
		}
		return count
	}
}
