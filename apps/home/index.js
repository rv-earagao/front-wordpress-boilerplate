import jails from 'jails-js'

// @Components
import app from './app'
import hello from 'components/hello-world'

// @Dependencies
const dependencies = {
	injection: {}
}

// @Application
jails('home', app, dependencies)
jails('hello-world', hello, dependencies)
