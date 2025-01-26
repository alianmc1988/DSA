export class ValidAnagram {
	isAnagram(s: string, t: string): boolean {
		if (s.length !== t.length) {
			return false
		}
		const map = new Map<string, number>()
		for (let i = 0; i < s.length; i++) {
			const char = s[i]
			if (map.has(char)) {
				map.set(char, map.get(char)! + 1)
			} else {
				map.set(char, 1)
			}
		}
		for (let i = 0; i < t.length; i++) {
			const char = t[i]
			if (map.has(char)) {
				map.set(char, map.get(char)! - 1)
				if (map.get(char) === 0) {
					map.delete(char)
				}
			} else {
				return false
			}
		}
		return map.size === 0
	}
}
