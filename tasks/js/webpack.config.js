const configenv = process.env.ENV_CONFIG || 'production'

const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const APPCONFIG = require('../../appconfig')[configenv]
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const environment = process.env.NODE_ENV
const {optimize} = webpack
const DEV = environment !== 'production'

const config = {
	src	: path.resolve(__dirname, '../../'),
	dist: path.resolve(__dirname, '../../build')
}

const modules = {
	rules: [{
		test: /\.js$/,
		exclude: /node_modules/,
		use: [{ loader: 'babel-loader' }]
	}]
}

const output = {
	path: config.dist,
	chunkFilename:'js/[name].js',
	filename: 'js/[name].js',
	publicPath: '/wp-content/themes/boilerplate/build/'
}

module.exports = [
	{
		watch 	:!!DEV,
		devtool	:DEV? 'source-map' : false,
		module 	:modules,
		output,

		entry 	:glob.sync(`${config.src}/apps/**/index.js`).reduce(entries,{
			main:[ `${config.src}/js/main.js` ]
		}),

		resolve :{
			modules :[ config.src, config.dist, 'node_modules' ]
		},

		plugins :[
			new optimize.CommonsChunkPlugin({ name: 'main', filename:'js/main.js' }),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify( environment ),
				APPCONFIG: JSON.stringify( APPCONFIG )
			})
		].concat( !DEV? new UglifyJsPlugin() :[] )
	}
]

function entries(acc, file){
	const dir = path.dirname(file).split(/\//).pop()
	acc[`${dir}`] = (acc[dir] || []).concat(file)
	return acc
}
