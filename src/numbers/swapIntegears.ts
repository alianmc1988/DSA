export const swap = (num: number): number => {
	let result = 0
	while (num != 0) {
		const reminder = num % 10
		result = result * 10 + reminder
		if (result < Number.MIN_SAFE_INTEGER || result > Number.MAX_SAFE_INTEGER) {
			return 0
		}
		num /= 10
	}

	return result
}
