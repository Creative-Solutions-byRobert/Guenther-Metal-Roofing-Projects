$( '.invoice' ).hide()

function checkAll_fields( object ) {
	const required = [ 'name', 'address', 'city', 'phoneN', 'email', 'subtotal', 'mattePrice', 'color' ]
	if ( !object ) return
	for ( const key in required ) {
		if ( object[ required[ key ] ] === '' ) {
			alert( 'Please fill out all required fields.' )
			return
		}
	}
	return object
}

function formatPhoneNumber( phoneNumberString ) {
	var cleaned = ( '' + phoneNumberString ).replace( /\D/g, '' );
	var match = cleaned.match( /^(1|)?(\d{3})(\d{3})(\d{4})$/ );
	if ( match ) {
		var intlCode = ( match[ 1 ] ? '+1 ' : '' );
		return [ intlCode, '(', match[ 2 ], ') ', match[ 3 ], '-', match[ 4 ] ].join( '' );
	}
	return null;
}

function numberWithCommas( number ) {
	if ( isNaN( number ) || !number ) return
	return number.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," )
}
