$( document ).ready( function() {

	// When you click the blue button at the bottom of the input page, it should hide this page.
	$( '#button' ).click( () => {

		const inputValues = checkAll_fields( getInputValues() )
		if ( inputValues ) {
			for ( const key in inputValues )
				console.log( key, inputValues[ key ] )
			$( '.input' ).hide()
			$( '.invoice' ).show()
			displayValues()
		}
	} )

	// Disable the textarea if checkbutton is checked, to use the default include text
	$( '#defaultIncludesText' ).click( function() {
		if ( $( '#defaultIncludesText' ).is( ':checked' ) ) {
			$( '#includesText' ).prop( 'disabled', true )
		} else {
			$( '#includesText' ).prop( 'disabled', false )
		}
	} )


	// Change the color palet to display the selected color
	$( '#color' ).on( 'change', function() {
		if ( this.value ) $( '#colorPalet' ).css( 'background', '#' + this.value )
	} )


} )
