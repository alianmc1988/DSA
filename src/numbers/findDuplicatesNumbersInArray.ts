export class FindDuplicatesNumbersInArray {
	findDuplicates(arr: number[]): number[] {
		const results: number[] = []
		for (let i = 0; i < arr.length; i++) {
			const index = Math.abs(arr[i]) - 1
			if (index < arr.length && !(arr[index] < 0)) {
				arr[index] = -arr[index]
			} else {
				results.push(Math.abs(arr[index + 1]))
			}
		}
		return results
	}
}
