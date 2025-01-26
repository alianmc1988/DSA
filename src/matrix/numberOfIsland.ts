export class NumberOfIsland {
	numberOfisland(grid: number[][]): number {
		// check if the grid is empty
		if (grid.length === 0) return 0
		let count = 0

		// Iterate over the grid
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[0].length; j++) {
				if (grid[i][j] != 0) {
					count++
					this.dfs(grid, i, j)
				}
			}
		}

		return count
	}

	private dfs(grid: number[][], i: number, j: number): void {
		if (this.isWater(grid, i, j)) return

		grid[i][j] = 0
		this.dfs(grid, i - 1, j)
		this.dfs(grid, i, j + 1)
		this.dfs(grid, i + 1, j)
		this.dfs(grid, i, j - 1)
	}

	private isWater(grid: number[][], i: number, j: number) {
		const rowLength = grid.length
		const colLength = grid[0].length
		return (
			i < 0 || j < 0 || i >= rowLength || j >= colLength || grid[i][j] === 0
		)
	}
}
