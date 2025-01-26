// Optimized time: O(n^2) space:O(1)
function longestPalindrome(s: string): string {
	const n = s.length
	if (n === 0) return ''

	let start = 0
	let maxLength = 1

	const expandAroundCenter = (left: number, right: number) => {
		while (left >= 0 && right < n && s[left] === s[right]) {
			left--
			right++
		}
		// Update the start and maxLength if a longer palindrome is found
		if (right - left - 1 > maxLength) {
			start = left + 1
			maxLength = right - left - 1
		}
	}

	for (let i = 0; i < n; i++) {
		// Expand around the center for odd-length palindromes
		expandAroundCenter(i, i)
		// Expand around the center for even-length palindromes
		expandAroundCenter(i, i + 1)
	}

	return s.substring(start, start + maxLength)
}

// UnOptimized O(n^2) time and space
export function longestPalindrome2(s: string): string {
	const n = s.length
	if (n === 0) return ''

	// Initialize a 2D array to store the palindrome status
	const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false))

	let start = 0
	let maxLength = 1

	// All substrings of length 1 are palindromes
	for (let i = 0; i < n; i++) {
		dp[i][i] = true
	}

	console.log(dp)
	// Check substrings of length 2
	for (let i = 0; i < n - 1; i++) {
		if (s[i] === s[i + 1]) {
			dp[i][i + 1] = true
			start = i
			maxLength = 2
		}
	}

	console.log(dp)

	// Check substrings of length greater than 2
	for (let length = 3; length <= n; length++) {
		for (let i = 0; i < n - length + 1; i++) {
			const j = i + length - 1
			if (s[i] === s[j] && dp[i + 1][j - 1]) {
				dp[i][j] = true
				start = i
				maxLength = length
			}
			console.log(dp)
		}
	}

	return s.substring(start, start + maxLength)
}

// Example usage
const inputString = 'babad'
console.log(longestPalindrome(inputString)) // Output: "bab" or "aba"
