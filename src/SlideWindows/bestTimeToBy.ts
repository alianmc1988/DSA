const bestTimeToBy = (priceDays: number[]): number => {
	let maxproffit = 0

	let buying_price = priceDays[0]
	let currentproffit = 0

	for (let i = 1; i < priceDays.length; i++) {
		if (buying_price >= priceDays[i]) {
			buying_price = priceDays[i]
		} else {
			currentproffit = priceDays[i] - buying_price
			maxproffit = Math.max(maxproffit, currentproffit)
		}
	}

	return maxproffit
}
