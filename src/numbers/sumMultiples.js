// const gridInput = [
// 	[0, 1, 0, 0, 0, 0, 1, 0],
// 	[0, 1, 1, 1, 1, 1, 0, 0],
// 	[0, 0, 0, 1, 1, 0, 0, 0],
// 	[0, 0, 0, 1, 1, 0, 1, 1],
// ]

// const numOfIsland = (grid = []) => {
// 	if (!grid || !grid.length) return 0
// 	let max = 0
// 	let quantityOfIslands = 0
// 	let gridLength = grid.length

// 	for (let row = 0; row < gridLength; row++) {
// 		for (let col = 0; col < grid[row].length; col++) {
// 			const colLength = grid[row].length
// 			if (grid[row][col] === 1) {
// 				quantityOfIslands++
// 				const area = getArea(grid, row, col, gridLength, colLength)
// 				max = Math.max(max, area)
// 			}
// 		}
// 	}

// 	console.log(quantityOfIslands)

// 	return max
// }

// const getArea = (grid, row, col, gridLength, colLength) => {
// 	if (
// 		row < 0 ||
// 		col < 0 ||
// 		row >= gridLength ||
// 		col >= colLength ||
// 		grid[row][col] === 0
// 	) {
// 		return 0
// 	}

// 	grid[row][col] = 0
// 	const left = getArea(grid, row, col - 1, gridLength, colLength)
// 	const right = getArea(grid, row, col + 1, gridLength, colLength)
// 	const up = getArea(grid, row - 1, col, gridLength, colLength)
// 	const down = getArea(grid, row + 1, col, gridLength, colLength)

// 	const res = left + right + up + down + 1
// 	return res
// }

// console.log(numOfIsland(gridInput))

// assert

const originalWord = 'anagram'
const inputWord = 'nagaram'

const isAnagram = (ow, iw) => {
	const auxArr = new Array(26).fill(0)

	for (let i = 0; i < ow.length; i++) {
		const result = ow[i].charCodeAt(0) - 'a'.charCodeAt(0)
		auxArr[result]++
	}

	for (let i = 0; i < iw.length; i++) {
		const result = iw[i].charCodeAt(0) - 'a'.charCodeAt(0)
		auxArr[result]--
	}

	return auxArr.every((val) => val === 0)

}

module.exports = {
	originalWord,
	inputWord,
	isAnagram
}
