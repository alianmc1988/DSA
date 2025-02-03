import { TNodo } from '../commons'

const maxRobber = (houses: number[]): number => {
	if (houses.length < 2) {
		return houses[0]
	}

	const dp: number[] = []

	dp[0] = houses[0]
	dp[1] = houses[1]

	for (let i = 2; i < houses.length; i++) {
		dp[i] = Math.max(dp[i - 2] + houses[i], dp[i - 1])
	}

	return dp[houses.length - 1]
}

const maxRobberCircular = (houses: number[]): number => {
	if (houses.length < 2) {
		return houses[0]
	}

	const skipingFist: number[] = []
	const skipingLast: number[] = []

	for (let i = 0, j = i + 1; i < houses.length - 1; i++) {
		skipingLast[i] = houses[i]
		skipingFist[i] = houses[j]
	}

	return Math.max(maxRobber(skipingLast), maxRobber(skipingFist))
}

const maxRobberBinaryTree = (root: TNodo): number => {
	const options: number[] = travel(root)
	return Math.max(options[0], options[1])
}

const travel = (root: TNodo): number[] => {
	if (root === null) {
		return [0, 0]
	}

	const leftNodes = travel(root.left) || [0, 0]
	const rightNodes = travel(root.right) || [0, 0]
	const options = []

	options[0] = root.value + leftNodes[1] + rightNodes[1]

	options[1] = Math.max(
		leftNodes[0],
		leftNodes[1] + Math.max(rightNodes[0], rightNodes[1]),
	)

	return options
}
