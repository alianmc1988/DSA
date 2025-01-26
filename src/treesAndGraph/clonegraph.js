export class Nodo {
	constructor(val, neighbors = []) {
		this.val = val
		this.neighbors = neighbors
	}
}
export const connectedGraph = () => {
	const newNode1 = new Nodo(1)
	const newNode2 = new Nodo(2)
	const newNode3 = new Nodo(3)
	const newNode4 = new Nodo(4)

	newNode1.neighbors.push(newNode2, newNode3)
	newNode2.neighbors.push(newNode1, newNode4)
	newNode3.neighbors.push(newNode4, newNode1)
	newNode4.neighbors.push(newNode2, newNode3)

	return { newNode1, newNode2, newNode3, newNode4 }
}

const cloneGraph = (nodo, mapSet) => {
	if (mapSet.has(nodo.val)) return mapSet.get(nodo.val)

	const newNodo = new Nodo(nodo.val)
	mapSet.set(nodo.val, newNodo)
	for (let neighbor of nodo.neighbors) {
		newNodo.neighbors.push(cloneGraph(neighbor, mapSet))
	}
	return newNodo
}
export const cloneGraphFunc = (nodo) => {
	if (!nodo) return null
	const mapSet = new Map()

	return cloneGraph(nodo, mapSet)
}
