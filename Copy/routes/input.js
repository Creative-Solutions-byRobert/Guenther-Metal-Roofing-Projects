const path = require( 'path' )

const express = require( 'express' )
const routes = express.Router()

const data = require('./invoice')
const rootDir = require('../util/path')


routes.get( '/', ( req, res ) => {
	res.render('input', { pageTitle: 'Input Page' })
} )


module.exports = routes
