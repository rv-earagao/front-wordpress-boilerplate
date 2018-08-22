const path = require('path')
const fs = require('fs')
const cleanCSS = require('clean-css')
const filterCSS = require('filter-css')
const penthouse = require('penthouse')

module.exports = ({srcPath, buildPath, root}) => (cb) => {

	const paths = require('../../critical-path/index.json')

	Object.keys(paths).map((name, index) => {

		const data = paths[name]

		penthouse({
			url: `https://wordpressboilerplate.lndo.site${data.url}`,
			css: path.resolve(__dirname, '../../', `build/css/${name}.css`),
			width: 1920,
			height: 1920,
			timeout: 10000,
			forceInclude: [
				'.keepMeEvenIfNotSeenInDom'
			],
			maxEmbeddedBase64Length: 0,
			renderWaitTime: 5000,
			blockJSRequests: true
		})
			.then(criticalCSS => {
				const filtered = filterCSS(criticalCSS, [/url\(/, '@font-face', /print/, /\[]/])
				const cleanCritical = new cleanCSS({ level: 2 }).minify(filtered).styles

				fs.writeFile(path.resolve(__dirname, '../../', `critical-path/${name}.php`), cleanCritical, 'utf8', err => {
					if (err) throw err
					console.log(`-> Critical Path for ${name} Generated successfully`)
				})
			})
			.then(() => {
				if (index == Object.keys(paths).length -1 )
					cb()
			})
	})

}
