export const buildMatrix = (rows: number, cols: number): number[][] => {
	const matrix = new Array(rows).fill(0).map(() => new Array(cols).fill(0))
	return matrix
}

export class RobotUniquePaths {
	private buildMatrix(rows: number, cols: number): number[][] {
		const matrix = new Array(rows).fill(0).map(() => new Array(cols).fill(0))
		return matrix
	}
	uniquePaths(rows: number, cols: number): number {
		const matrix = this.buildMatrix(rows, cols)
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
				if (i === 0 || j === 0) {
					matrix[i][j] = 1
				} else {
					matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
				}
			}
		}
		return matrix[rows - 1][cols - 1]
	}
}
