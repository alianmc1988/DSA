import { Nodo, Nodes } from './Nodo'

export class SingleLinkedList {
	public head: Nodes = null

	appendToTail(value: number): void {
		if (this.head === null) {
			this.head = new Nodo(value)
			return
		}

		let current = this.head
		while (current.next) {
			current = current.next
		}
		current.next = new Nodo(value)
	}

	appendToHead(value: number): void {
		const nNode = new Nodo(value, this.head)
		this.head = nNode
	}

	deleteNode(value: number): void {
		if (!this.head) return

		if (this.head.value === value) {
			this.head = this.head.next
			return
		}

		let current = this.head
		while (current.next) {
			if (current.next.value === value) {
				current.next = current.next.next
				return
			}
			current = current.next
		}
	}

	clearList(): void {
		this.head = null
	}

	removeDuplicated(): Array<number> {
		if (this.head === null) return []
		const set: Set<number> = new Set()

		set.add(this.head.value)
		let current = this.head
		while (current.next != null) {
			if (!set.has(current.next.value)) {
				set.add(current.next.value)
			} else {
				this.deleteNode(current.next.value)
			}
			current = current.next as Nodo
		}

		return Array.from(set)
	}

	nThNodeToLast(head: Nodes, n: number): number | null | undefined {
		// En una lista enlazada simple y un valor N, devolver el nodo Nth desde el final de la lista.

		let p1 = head
		let p2 = head
		for (let i = 0; i < n; i++) {
			if (p1 === null) return null
			p1 = p1.next as Nodo
		}

		while (p1 != null) {
			p1 = p1?.next as Nodo
			p2 = p2?.next as Nodo
		}

		return p2?.value

		// 1 -> 2 -> 4 -> 6
		// n = 2
		// 4
	}

	print(): void {
		let current = this.head
		if (current === null) {
			console.log('EMPTY LIST')
			return
		}

		let toPrint = `${current.value}`

		while (current.next) {
			toPrint = toPrint + ` -> ${current.next.value}`
			current = current.next as Nodo
		}

		toPrint = toPrint + ' -> END'

		console.log(toPrint)
	}
}
