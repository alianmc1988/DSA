export class Nodo {
	private next: Nodo | null = null
	private value: string

	constructor(value: string) {
		this.value = value
	}

	public set nextNode(v: Nodo | null) {
		this.next = v
	}

	public get nextNode(): Nodo | null {
		return this.next
	}

	public get nodeValue(): string {
		return this.value
	}

	public printList(): void {
		let current: Nodo = this
		let stringChain: string | undefined = undefined

		while (true) {
			const value = current.nodeValue
			if (stringChain) {
				stringChain = `${stringChain ? stringChain : ''} -> ${value}`
			} else {
				stringChain = value
			}
			if (current.nextNode === null) break
			current = current.nextNode
		}
		console.log(stringChain)
	}
}
