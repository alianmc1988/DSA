function matchingStrings(strings: string[], queries: string[]): number[] {
	// Write your code here
	const result: number[] = []
	for (let i = 0; i < queries.length; i++) {
		let sum = 0
		for (let j = 0; j < strings.length; j++) {
			if (queries[i] === strings[j]) {
				sum++
			}
		}
		result[i] = sum
	}
	return result
}
