const util = require('./numbers')

module.exports = class Data {
	#All = {}
	constructor( name, address, phone, email, sqft, subtotal, matte, profile, comment, includeText ) {
		this.name = name
		this.phone = phone
		this.address = address
		this.email = email
		this.sqft = Number(sqft)
		this.subtotal = parseFloat(subtotal)
		this.tax = this.subtotal * 0.13
		this.total = this.subtotal + this.tax
		this.matte = parseFloat(matte) * 0.1
		this.profile = profile
		this.comment = comment
		this.includeText = includeText
		


		this.#All = {
			name: this.name,
			phone: this.phone,
			address: this.address,
			email: this.email,
			sqft: util.numberFormatter(this.sqft),
			subtotal: util.numberFormatter( parseFloat(this.subtotal).toFixed(2)),
			tax: util.numberFormatter( parseFloat(this.tax).toFixed(2) ),
			total: util.numberFormatter( parseFloat( this.total ).toFixed(2) ),
			matte: util.numberFormatter( parseFloat(this.matte).toFixed(2) ),
			profile: this.profile,
			comment: this.comment,
			includeText: this.includeText
		}
	}
	
	


	all() {
		return this.#All
	}

}
