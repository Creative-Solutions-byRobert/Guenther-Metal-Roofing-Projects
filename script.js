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


$( '#button' ).click( () => {
	const inputValues = checkAll_fields( getInputValues() )

	if ( inputValues ) {
		for ( const key in inputValues )
			console.log( key, inputValues[ key ] )
		alert( 'Ready to be Quoted' )
	}
} )

$( '#defaultIncludesText' ).click( function() {
	if ( $( '#defaultIncludesText' ).is( ':checked' ) ) {
		$( '#includesText' ).prop( 'disabled', true )
	} else {
		$( '#includesText' ).prop( 'disabled', false )
	}
} )
