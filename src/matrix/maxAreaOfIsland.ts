export class MaxAreaOfIsland {
	maxAreaOfIsland(grid: number[][]): number {
		let maxArea = 0
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[0].length; j++) {
				if (grid[i][j] === 1) {
					maxArea = Math.max(maxArea, this.dfs(grid, i, j))
				}
			}
		}
		return maxArea
	}

	private isWater(grid: number[][], i: number, j: number): boolean {
		const colLenth = grid[0].length
		const rowLenth = grid.length
		return i < 0 || i >= rowLenth || j < 0 || j >= colLenth || grid[i][j] === 0
	}

	private dfs(grid: number[][], i: number, j: number): number {
		if (this.isWater(grid, i, j)) {
			return 0
		}
		grid[i][j] = 0

		const up = this.dfs(grid, i - 1, j)
		const down = this.dfs(grid, i + 1, j)
		const left = this.dfs(grid, i, j - 1)
		const right = this.dfs(grid, i, j + 1)

		return 1 + up + down + left + right
	}
}
