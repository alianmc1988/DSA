export class RobotUniquePaths {
	private buildMatrix(rows: number, cols: number): number[][] {
		return Array.from({ length: rows }, () => Array(cols).fill(0))
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

	uniquePathsBFS(rows: number, cols: number): number {
		if (rows === 0 || cols === 0) return 0
		const queue: [number, number][] = [[0, 0]]
		const directions = [
			[1, 0],
			[0, 1],
		]
		let paths = 0

		while (queue.length > 0) {
			const [x, y] = queue.shift()!
			if (x === rows - 1 && y === cols - 1) {
				paths++
			} else {
				for (const [dx, dy] of directions) {
					const nx = x + dx
					const ny = y + dy
					if (nx < rows && ny < cols) {
						queue.push([nx, ny])
					}
				}
			}
		}

		return paths
	}
}
