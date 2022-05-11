function numberWithCommas( number ) {
	// if ( isNaN( number ) || !number ) return
	return number.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," )
}

// function sendTo_Server_data( json ) {
// 	const POST = fetch( "/send", {
// 		method: "POST",
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify( {
// 			json
// 		} )
// 	} )
// }
//
//
function cycleElements( html_ids ) {
	for ( const [ key, value ] of Object.entries( html_ids ) ) {
		// if ( !value ) continue

		document.getElementById( key ).innerHTML = value
	}
}


function fillOut_customerInfo( cusomerInfo ) {
	const html_ids = {
		'date': new Date().toLocaleDateString(),
		'name': cusomerInfo.name,
		'address': cusomerInfo.address,
		'phone': cusomerInfo.phoneN,
		'email': cusomerInfo.email,
		'matteFinish': cusomerInfo.matteFinish

	}

	cycleElements( html_ids )
}


function fillOut_anyNumbers(json_data) {

	const sqft = Number(prompt('Total Square Footage'))
	const subtotal = prompt('Subtotal')
	const tax = parseFloat(parseFloat(subtotal) * 0.13).toFixed(2)
	const total = parseFloat(parseFloat(subtotal) + parseFloat(tax)).toFixed(2)
	const matte = parseFloat(parseFloat(prompt('Total Slope + Total Markup')) * 0.1).toFixed(2)

	const numbers = {
		'sqft': numberWithCommas(sqft),
		'subtotal': numberWithCommas(subtotal),
		'tax': numberWithCommas(tax),
		'total': numberWithCommas(total),
		'matteFinish': `If you would like a Matte Paint Finish, add $${numberWithCommas(matte)} + tax <br> extra to your quote`,
		'specialNote': prompt('Any special notes wou would like to add?  ')
	}
	console.log(numbers.sqft)
	json_data.sqft = numbers.sqft
	json_data.subtotal = numbers.subtotal
	json_data.matteFinish = matte
	cycleElements(numbers)
	// sendTo_Server_data(json_data)
}

function getJSON_file( jsonFile ) {
	return new Promise( ( resolve, reject ) => {
		if ( jsonFile ) {

			fillOut_customerInfo( jsonFile )

			fillOut_anyNumbers( jsonFile )
			resolve( 'JSON file was received' )
		}
		if ( !jsonFile )
			reject( `JSON file was not received` )
	} )
}


async function loadJS() {

	const fetchResults = await fetch( '/json' )
		.then( results => results.json() )
		.then( getJSON_file ).catch( err => console.log( err ) )

}

window.addEventListener( 'load', loadJS );
