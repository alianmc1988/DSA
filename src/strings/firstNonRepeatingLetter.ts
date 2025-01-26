export class FisrtNonRepeatingLetter {
	firstNonRepeatingLetter(str: string): string | number {
		const map = new Map<string, number>()
		for (let i = 0; i < str.length; i++) {
			const char = str[i]
			if (map.has(char)) {
				map.set(char, map.get(char)! + 1)
			} else {
				map.set(char, 1)
			}
		}
		for (let i = 0; i < str.length; i++) {
			const char = str[i]
			if (map.get(char) === 1) {
				return char
			}
		}
		return -1
	}
}
