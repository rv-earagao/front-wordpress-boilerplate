import jails from 'jails-js'
import arch from 'jails.packages/arch'
import loader from 'jails.packages/assets-loader'

/* globals Pjax */
const jquerycdn = 'https://code.jquery.com/jquery-3.3.1.min.js'

export const main = () => {
	return loader({ js: jquerycdn })
		.then( loadApplication )
}

export const loadApplication = () => {

	const app = document.getElementById('application')
	const url = app.getAttribute('data-src')

	return loader({ js: url })
		.then(getLogger)
		.then(() => jails.extends(arch()).start())
}

const getLogger = () => {
	return process.env.NODE_ENV !== 'production'
		? import(/* webpackChunkName: 'logger' */ 'jails.packages/logger')
			.then((logger) => jails.use(logger.default()))
		: null
}
