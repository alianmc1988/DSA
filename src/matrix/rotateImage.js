const rotateImage = (image) => {
	const n = image.length

	// Transpose the matrix in place
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			;[image[i][j], image[j][i]] = [image[j][i], image[i][j]]
		}
	}

	// Reverse each row in place
	for (let i = 0; i < n; i++) {
		image[i].reverse()
	}

	return image
}

// const rotateImage = (image) => {
// 	const imageLength = image.length

// 	const transponded = transposeImage(image, imageLength)

// 	return reverseImage(transponded, imageLength)
// }

// const transposeImage = (image, n) => {
// 	let transpondedImage = Array.from({ length: n }, () => Array(n).fill(0))

// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < image[i].length; j++) {
// 			transpondedImage[j][i] = image[i][j]
// 		}
// 	}
// 	return transpondedImage
// }

// const reverseImage = (image, matrixLenth) => {
// 	for (let rowPos = 0; rowPos < matrixLenth; rowPos++) {
// 		for (
// 			let initColPos = 0, endColPos = matrixLenth - 1;
// 			initColPos < endColPos;
// 			initColPos++, endColPos--
// 		) {
// 			swap(image, rowPos, initColPos, endColPos)
// 		}
// 	}
// 	return image
// }

// const swap = (image, rowPos, initColPos, endColPos) => {
// 	const aux = image[rowPos][endColPos]
// 	image[rowPos][endColPos] = image[rowPos][initColPos]
// 	image[rowPos][initColPos] = aux
// 	return image
// }

const matrixEx = [
	[1, 0, 1, 1],
	[0, 1, 1, 0],
	[1, 1, 0, 1],
	[0, 0, 1, 0],
]

console.log(rotateImage(matrixEx).map((row) => row.join(' ')) + '\n')
