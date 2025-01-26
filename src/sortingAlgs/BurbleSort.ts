import { IAlgorithms } from '../IAlgorithms'

export class BurbleSort implements IAlgorithms {
	// O(n^2)
	private sort(arr: Array<number>): number[] {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					const temp = arr[j]
					arr[j] = arr[j + 1]
					arr[j + 1] = temp
				}
			}
		}
		return arr
	}
	run(arr: Array<number>): any {
		return this.sort(arr)
	}
}
