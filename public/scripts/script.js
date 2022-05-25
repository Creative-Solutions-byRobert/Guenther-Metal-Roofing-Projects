function displayValues() {

	const inputManager = getInputValues()


	$( '#date' ).text( new Date().toLocaleDateString() )
	$( '#customerName' ).text( inputManager[ 'name' ] )
	$( '#customerAddress' ).text( inputManager[ 'address' ] )

	$( '#customerPhone' ).text( inputManager[ 'phoneN' ] )
	$( '#customerEmail' ).text( inputManager[ 'email' ] )

	$( '#sqft' ).text( numberWithCommas( inputManager[ 'sqft' ] ) )
	$( '#InvoiceSubtotal' ).text( numberWithCommas( parseFloat( inputManager[ 'subtotal' ] ).toFixed( 2 ) ) )
	$( '#InvoiceTax' ).text( numberWithCommas( parseFloat( inputManager[ 'tax' ] ).toFixed( 2 ) ) )
	$( '#InvoiceTotal' ).text( numberWithCommas( parseFloat( inputManager[ 'total' ] ).toFixed( 2 ) ) )





}
