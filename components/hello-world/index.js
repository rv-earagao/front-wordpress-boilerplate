
export default async ({ init:main, elm }) => {

	const image = elm.querySelector('img')
	await loadImage( image )

	main(()=>[
		show
	])

	const show = () => {
		image.classList.add('ready')
	}
}

const loadImage = (image) => {
	return new Promise((resolve, reject) => {
		image.onload = resolve
		image.onerror = reject
		image.src = image.getAttribute('data-src')
	})
}
