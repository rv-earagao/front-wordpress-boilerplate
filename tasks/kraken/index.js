const Kraken = require('kraken')
const http = require('https')
const glob = require('glob')
const fs = require('fs')
const mkdirp = require('mkdirp')

module.exports = ({ srcPath, root, buildPath }) => () => {

	const imagesDevDir = `${root}/src/img`
	const imagesDestDir = `${root}/build/img`

	if (!fs.existsSync(imagesDestDir)) {
		mkdirp(imagesDestDir)
	}

	const kraken = new Kraken({
		'api_key': '16b02ba654479da158eba8eb620cab6e',
		'api_secret': '0154f95e70c2e018fac3cf7579c01749346be7b5'
	})

	glob(`${imagesDevDir}**/*.{jpeg,jpg,gif,png}`, (err, allImages) => {
		if (err) {
			console.log('Error on images glob', err)
			return
		}

		if (allImages.length === 0) {
			console.log('No new images to be compressed')
			return
		}

		console.log('Compressing images')
		const promises = allImages.map(file => new Promise((resolve, reject) => {
			let params = {
				file,
				wait: true
			}

			kraken.upload(params, (status) => {
				if (status.success) {
					console.log('Success. Optimized image URL: %s', status.kraked_url)
				} else {
					console.log('Error on optimizing images', JSON.stringify(status))
				}
				resolve(status)
			})
		}))

		const onCompressImages = (results) => {
			results.forEach((result) => {
				const { file_name, kraked_url } = result,
					filePath = `${imagesDestDir}/${file_name}`,
					fileDevPath = `${imagesDevDir}/${file_name}`,
					file = fs.createWriteStream(filePath)
				http.get(kraked_url, (res) => {
					res.pipe(file)
					file.on('finish', () => {
						console.log('Saved file %s', file_name)
						file.end()
						fs.unlinkSync(fileDevPath)
						console.log('Deleted src file %s', file_name)
					})
				})
					.on('error', (err) => {
						fs.unlink(filePath)
						console.log('Error on downloading file, %s \n %s', file_name, kraked_url)
						console.log('Error: ', err)
					})
			})
		}

		Promise.all(promises)
			.then(onCompressImages)
			.catch(r => {
				console.log('Error on upload image')
				console.log(r)
			})
	})
}
