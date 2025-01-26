export class MaximumGold {
	maxGold(grid: number[][]) {
		let count: number = 0

		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
				if (grid[i][j] >= 0) {
					const result = this.goldPath(grid, i, j)
					count = Math.max(count, result)
				}
			}
		}
		return count
	}

	goldPath(grid: number[][], x: number, y: number): number {
		if (
			x < 0 ||
			x >= grid.length ||
			y < 0 ||
			y >= grid[x].length ||
			grid[x][y] === 0
		)
			return 0
		let counter: number = grid[x][y]
		grid[x][y] = 0

		const up = this.goldPath(grid, x - 1, y)
		const down = this.goldPath(grid, x + 1, y)
		const left = this.goldPath(grid, x, y - 1)
		const right = this.goldPath(grid, x, y + 1)

		grid[x][y] = counter
		return counter + Math.max(up, down, left, right)
	}
}
