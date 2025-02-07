export interface INodeList {
	value: number | string
	prev: TNodeList
	next: TNodeList
}

export type TNodeList = INodeList | null
