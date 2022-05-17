function formatPhoneNumber( phoneNumberString ) {
	var cleaned = ( '' + phoneNumberString ).replace( /\D/g, '' );
	var match = cleaned.match( /^(1|)?(\d{3})(\d{3})(\d{4})$/ );
	if ( match ) {
		var intlCode = ( match[ 1 ] ? '+1 ' : '' );
		return [ intlCode, '(', match[ 2 ], ') ', match[ 3 ], '-', match[ 4 ] ].join( '' );
	}
	return null;
}

function getInputValues() {
	const name = $( '#name' ).val()
	const address = $( '#address' ).val()
	const city = $( '#city' ).val()
	const phoneN = formatPhoneNumber( $( '#phoneN' ).val() )
	const email = $( '#email' ).val()
	const subtotal = parseFloat( $( '#subtotal' ).val() )
	const tax = subtotal * 0.13
	const total = subtotal + tax
	const quoteFor = $( '#quoteFor' ).val()
	const mattePrice = parseFloat( $( '#mattePrice' ).val() ) * 0.1
	const profile = $( '#profile' ).val()
	const color = $( '#color' ).val()
	const includesText = $( '#includesText' ).val()
	const defaultIncludesText = $( '#defaultIncludesText' ).is( ':checked' )
	const matte = $( '#matte' ).is( ':checked' )


	if ( includesText === '' && !defaultIncludesText ) {
		if ( confirm( 'Use default includes text?' ) ) {
			$( '#defaultIncludesText' ).prop( 'checked', true )
		} else {
			alert( 'Please fill out the Includes Text Area' )
			return
		}
	}

	const inputValues = {
		'name': name,
		'address': address,
		'city': city,
		'phoneN': phoneN,
		'email': email,
		'subtotal': subtotal,
		'tax': tax,
		'total': total,
		'quoteFor': quoteFor,
		'mattePrice': mattePrice,
		'profile': profile,
		'color': color,
		'includesText': includesText,
		'defaultIncludesText': defaultIncludesText,
		'matteChecked': matte
	}
	return inputValues
}
