import { ISort } from './ISort'
export class MergeSort implements ISort {
	sort(arr: Array<number>): number[] {
		if (arr.length <= 1) {
			return arr
		}
		const middle = Math.floor(arr.length / 2)
		const left = arr.slice(0, middle)
		const right = arr.slice(middle)
		return this.merge(this.sort(left), this.sort(right))
	}

	private merge(left: number[], right: number[]): number[] {
		let arr: number[] = []
		while (left.length && right.length) {
			if (left[0] < right[0]) {
				const leftItem = left.shift()
				if (leftItem !== undefined) {
					arr.push(leftItem)
				}
			} else {
				const rightItem = right.shift()
				if (rightItem !== undefined) {
					arr.push(rightItem)
				}
			}
		}
		return [...arr, ...left, ...right]
	}

	run(arr: Array<number>): any {
		return this.sort(arr)
	}
}
