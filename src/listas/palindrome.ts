import { Nodo } from '../helpers/LinkedListNodo'

const head = new Nodo('A')
const pos1 = new Nodo('B')
const pos2 = new Nodo('C')
const pos3 = new Nodo('C')
const pos4 = new Nodo('B')
const tail = new Nodo('A')

// const head = new Nodo('A')
// const pos1 = new Nodo('B')
// const pos2 = new Nodo('C')
// const pos3 = new Nodo('D')
// const pos4 = new Nodo('E')
// const tail = new Nodo('F')

head.nextNode = pos1
head.nextNode.nextNode = pos2
head.nextNode.nextNode.nextNode = pos3
head.nextNode.nextNode.nextNode.nextNode = pos4
head.nextNode.nextNode.nextNode.nextNode.nextNode = tail

const middleList = (nodo: Nodo): Nodo | null => {
	if (!nodo) return null
	if (nodo.nextNode === null || nodo.nextNode.nextNode === null) return nodo

	let slow: Nodo | null = nodo
	let fast: Nodo | null = nodo

	while (fast != null && fast.nextNode != null) {
		fast = fast.nextNode.nextNode
		slow = slow?.nextNode ? slow?.nextNode : null
	}
	return slow
}
middleList(head)?.printList()

const reverseLinkList = (nodo: Nodo): Nodo | null => {
	if (!nodo) return null
	if (!nodo.nextNode) return nodo

	let prevNode: Nodo | null = null
	let currentNode: Nodo | null = nodo
	let nextNode: Nodo | null = nodo

	while (currentNode) {
		nextNode = nextNode?.nextNode ? nextNode?.nextNode : null
		currentNode.nextNode = prevNode
		prevNode = currentNode
		currentNode = nextNode
	}
	return prevNode
}

reverseLinkList(head)?.printList()

const palindromeList = (nodo: Nodo): boolean => {
	const middle = middleList(nodo)
	if (middle) {
		middle.nextNode = reverseLinkList(middle)
	}
	let lead: Nodo | null = nodo.nextNode
	let lag: Nodo | null = nodo

	while (lag && lag != nodo.nextNode) {
		if (lag.nodeValue != lead?.nodeValue) return false
		lead = lead.nextNode
		lag = lag?.nextNode
	}
	return true
}

console.log(palindromeList(head))
