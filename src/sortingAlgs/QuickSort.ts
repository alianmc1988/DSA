import { ISort } from './ISort'

export const sort = (arr: Array<number>): number[] => {
	if (arr.length <= 1) {
		return arr
	}
	const left = 0
	const right = arr.length - 1
	return quickSort(arr, left, right)
}

const quickSort = (
	arr: Array<number>,
	left: number,
	right: number,
): number[] => {
	if (left < right) {
		const pivot = partition(arr, left, right)
		quickSort(arr, left, pivot - 1)
		quickSort(arr, pivot + 1, right)
	}
	return arr
}

const partition = (arr: Array<number>, left: number, right: number): number => {
	const pivot = arr[right]
	let i = left - 1
	for (let j = left; j < right; j++) {
		if (arr[j] < pivot) {
			i++
			const temp = arr[i]
			arr[i] = arr[j]
			arr[j] = temp
		}
	}
	const temp = arr[i + 1]
	arr[i + 1] = arr[right]
	arr[right] = temp
	return i + 1
}

export class QuickSort implements ISort {
	private partition(arr: Array<number>, left: number, right: number): number {
		const pivot = arr[right]
		let i = left - 1
		for (let j = left; j < right; j++) {
			if (arr[j] < pivot) {
				i++
				const temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp
			}
		}
		const temp = arr[i + 1]
		arr[i + 1] = arr[right]
		arr[right] = temp
		return i + 1
	}

	private quickSort(arr: Array<number>, left: number, right: number): number[] {
		if (left < right) {
			const pivot = this.partition(arr, left, right)
			this.quickSort(arr, left, pivot - 1)
			this.quickSort(arr, pivot + 1, right)
		}
		return arr
	}

	sort(arr: number[]): number[] {
		if (arr.length <= 1) {
			return arr
		}
		const left = 0
		const right = arr.length - 1
		return this.quickSort(arr, left, right)
	}
	run(arr: Array<number>): any {
		return sort(arr)
	}
}
