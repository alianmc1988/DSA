import { BurbleSort, MergeSort } from './sortingAlgs/index'
import { buildMatrix, RobotUniquePaths } from './matrix/robotExercise'
import { swap } from './numbers/swapIntegears'
import { MaximumGold } from './matrix/maximunGold'
import { longestPalindrome2 } from './strings/longestPalindromeInAString'
import {
	maxSubstring,
	productOfElementsExeptSelf,
	productOfEle,
} from './listas/maxProductSubstring'
import { rotateArray } from './listas/RotateArray'
import { longestPrefix } from './strings/longestPrefix'

const arrStr = ['cluster', 'clue', 'clutch', 'club', 'clumsy']

console.log(longestPrefix(arrStr))

// const arr = [2, 3, -2, -5, 6, -1, 4]
// const arr = [1, 2, 3, 4]
// const arr = [-1, 1, 0, -3, 3]
// console.log(productOfEle(arr))
// console.log(productOfElementsExeptSelf(arr))
// console.log(maxSubstring(arr))
// console.log(rotateArray(arr, 10))

// type T = string | number | Array<number>

// class Main {
// 	run(): T {
// 		// // return longestSubsString(fullString, 3)
// 		// const unsortedArray: number[] = [8, 5, 3, 9, 11, 2]
// 		// const mergeSort: MergeSort = new MergeSort()
// 		// return mergeSort.run(unsortedArray)
// 		// // const burble: BurbleSort = new BurbleSort(unsortedArray)
// 		// // return burble.run()
// 		// const robot: RobotUniquePaths = new RobotUniquePaths()
// 		// return robot.uniquePaths(3, 4)

// 		// return swap(123)
// 		// const grid: number[][] = [
// 		// 	[0, 6, 0],
// 		// 	[5, 8, 7],
// 		// 	[0, 9, 0],
// 		// ]
// 		// const maxGold = new MaximumGold()
// 		// return maxGold.maxGold(grid)

// 	}
// }

// const inputString = 'babad'
// console.log(longestPalindrome2(inputString)) // Output: "bab" or "aba"

// const array = [7, -2, 3, 1, 2, 20, -5]
// const arr2 = [0, 2, 1]
// const arr3 = [2, 3, 1]

// const smallestPositiveNextElement = (arr: number[]) => {
// 	if (!arr.length) return 1
// 	let containsOne = false
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === 1) {
// 			containsOne = true
// 		} else if (arr[i] <= 0 || arr[i] > arr.length) {
// 			arr[i] = 1
// 		}
// 	}

// 	if (!containsOne) return 1

// 	for (let i = 0; i < arr.length; i++) {
// 		const index = Math.abs(arr[i]) - 1
// 		if (arr[index] > 0) arr[index] = -1 * arr[index]
// 	}
// 	console.log(arr)

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 0) {
// 			return i + 1
// 		}
// 	}

// 	return arr.length + 1
// }

// console.log(smallestPositiveNextElement(arr3))
