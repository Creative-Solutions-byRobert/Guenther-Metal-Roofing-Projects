function numberWithCommas( number ) {
	if ( isNaN( number ) || !number ) return
	return number.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," )
}


module.exports.numberFormatter = numberWithCommas

