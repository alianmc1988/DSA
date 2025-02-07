enum Steps {
	UP = 'U',
	DOWN = 'D',
	LEFT = 'L',
	RIGHT = 'R',
	WATER = 'O',
	START = 'X',
}

export class NumberOfDistinctIsland {
	dfs(grid: number[][]) {
		if (!grid.length) return 0
		const set: Set<string> = new Set()

		const rowLenth: number = grid.length
		const colLenth: number = grid[0].length

		for (let i = 0; i < rowLenth; i++) {
			for (let j = 0; j < colLenth; j++) {
				if (grid[i][j] == 1) {
					const path: string = this.computePath(grid, i, j, rowLenth, colLenth)
					set.add(path)
				}
			}
		}

		return set.size
	}

	computePath(
		grid: number[][],
		positionI: number,
		positionJ: number,
		rowLenth: number,
		colLenth: number,
		direction: Steps = Steps.START,
	): string {
		if (
			positionI < 0 ||
			positionJ < 0 ||
			positionI >= rowLenth ||
			positionJ >= colLenth ||
			grid[positionI][positionJ] === 0
		) {
			return Steps.WATER
		}

		const stepsPart: [number, number, Steps][] = [
			[0, -1, Steps.LEFT],
			[-1, 0, Steps.UP],
			[0, 1, Steps.RIGHT],
			[1, 0, Steps.DOWN],
		]
		grid[positionI][positionJ] = 0

		let path: string = direction

		for (const [i, j, Idirection] of stepsPart) {
			path += this.computePath(grid, i, j, rowLenth, colLenth, Idirection)
		}

		return path
	}
}
