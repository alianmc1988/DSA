export class MinimumWindowSubstring {
	minWindow(s: string, t: string): string {
		const map = new Map<string, number>()
		for (let i = 0; i < t.length; i++) {
			const char = t[i]
			map.set(char, map.has(char) ? map.get(char)! + 1 : 1)
		}
		let left = 0
		let right = 0
		let counter = map.size
		let minLen = Infinity
		let minStart = 0
		while (right < s.length) {
			const char = s[right]
			if (map.has(char)) {
				map.set(char, map.get(char)! - 1)
				if (map.get(char) === 0) {
					counter--
				}
			}
			right++
			while (counter === 0) {
				if (right - left < minLen) {
					minLen = right - left
					minStart = left
				}
				const temp = s[left]
				if (map.has(temp)) {
					map.set(temp, map.get(temp)! + 1)
					if (map.get(temp)! > 0) {
						counter++
					}
				}
				left++
			}
		}
		return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen)
	}
}
