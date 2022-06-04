const path = require( 'path' )

const express = require( 'express' )
const bodyParser = require( 'body-parser' )


const input = require( './routes/input' )
const { invoice, getData } = require( './routes/invoice' )



const app = express()

app.set( 'view engine', 'ejs' )
app.set( 'views', 'views' )

app.use( bodyParser.urlencoded( {
	extended: true
} ) )
app.use( express.static( path.join( __dirname, 'public' ) ) )

app.use('/invoice', invoice )
app.use(  input )

app.use((req, res) => {
	res.status(404).render('404', { pageTitle: 'Page not found' })
})

app.listen( 3000, () => {
	console.log( 'Listening on port 3000' )
} )
