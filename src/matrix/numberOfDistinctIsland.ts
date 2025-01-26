enum Steps {
	UP = 'U',
	DOWN = 'D',
	LEFT = 'L',
	RIGTH = 'R',
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
					const path: string = this.computePath(
						grid,
						i,
						j,
						rowLenth,
						colLenth,
						// Steps.START,
					)
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
		grid[positionI][positionJ] = 0
		const left: string = this.computePath(
			grid,
			positionI,
			positionJ - 1,
			rowLenth,
			colLenth,
			Steps.LEFT,
		)

		const up: string = this.computePath(
			grid,
			positionI - 1,
			positionJ,
			rowLenth,
			colLenth,
			Steps.UP,
		)

		const rigth: string = this.computePath(
			grid,
			positionI,
			positionJ + 1,
			rowLenth,
			colLenth,
			Steps.RIGTH,
		)

		const down: string = this.computePath(
			grid,
			positionI + 1,
			positionJ,
			rowLenth,
			colLenth,
			Steps.LEFT,
		)
		return direction + left + rigth + up + down
	}
}
