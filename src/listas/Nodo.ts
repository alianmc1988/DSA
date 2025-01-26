export type Nodes = Nodo | null

export class Nodo {
	constructor(
		public value: number,
		public next: Nodes = null,
		public prev: Nodes = null,
	) {}
}
