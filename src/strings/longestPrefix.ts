//const arrStr = [cluster, clue, clutch, club, clumsy]

export const longestPrefix = (arr: string[]): string => {
	if (!arr.length) return ''
	let response = ''
	arr.sort()

	const first = arr[0]
	const last = arr[arr.length - 1]

	for (let i = 0; i < first.length; i++) {
		if (first[i] !== last[i]) break
		response += first[i]
	}
	return response
}
