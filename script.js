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


$( '#color' ).on( 'change', function() {
	if ( !this.value ) $( '#colorPalet' ).addClass( 'transparent' )

	if ( this.value ) $( '#colorPalet' ).removeClass( 'transparent' ).css( 'background', '#' + this.value )
} );
