const path = require( 'path' )

const express = require( 'express' )
const routes = express.Router()

const Data = require( '../util/Data' )
const numberUtil = require('../util/numbers')

let DATA 

routes.post( '/quote_me', ( req, res ) => {

	const {
		name,
		address,
		city,
		phone,
		username,
		server,
		sqft,
		subtotal,
		matte,
		profile,
		color,
		comment,
		defaultText_1, 
		defaultText_2,
		defaultText_3,
		defaultText_4,
		defaultText_5,
		defaultText_6,
		useDefault,
		appendText,
		reno
	} = req.body
	

	const email = `${username}@${server}`
	DATA = new Data( name, address, city, phone, email, sqft, subtotal, matte, profile, comment,  color, defaultText_1, defaultText_2, defaultText_3, defaultText_4, defaultText_5, defaultText_6, useDefault,appendText, reno )
	res.redirect( '/invoice/quote_me' )
} )

routes.get( '/quote_me', ( req, res ) => {
	const data = DATA.all()
	
	res.render('invoice', { pageTitle: `${ data.name } ${ data.address } ${ data.phone }`, 'data': data })
} )

module.exports.invoice = routes
module.exports.getData = function () {
 return data
} 
