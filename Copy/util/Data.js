const util = require('./numbers')

module.exports = class Data {
	#All = {}
	constructor( name, address, city, phone, email, sqft, subtotal, matte, profile, comment,  color, defaultText_1, defaultText_2, defaultText_3, defaultText_4, defaultText_5, defaultText_6, appendText,  useDefault, reno ) {
		this.date = new Date().toLocaleDateString() 		
		this.name = name
		this.phone = phone
		this.address = address
		this.city = city
		this.email = email
		this.sqft = Number(sqft)
		this.subtotal = parseFloat(subtotal)
		this.tax = this.subtotal * 0.13
		this.total = this.subtotal + this.tax
		this.matte = parseFloat(matte) * 0.1
		this.profile = profile
		this.comment = comment
		this.color = color
		
		this.defaultText_1 = defaultText_1
		this.defaultText_2 = defaultText_2
		this.defaultText_3 = defaultText_3
		this.defaultText_4 = defaultText_4
		this.defaultText_5 = defaultText_5
		this.defaultText_6 = defaultText_6
		this.appendText = appendText === 'on'
		this.useDefault = useDefault === 'on'
		this.reno = reno
				
		if (this.city.toLowerCase() === 'st cath') this.city = 'St Catharines'
		if (this.city.toLowerCase() === 'notl') this.city = 'Niagara on the Lake'


		this.#All = {
			date: this.date,
			name: this.name,
			phone: this.phone,
			address: this.address,
			city: this.city,
			email: this.email,
			sqft: util.numberFormatter(this.sqft),
			subtotal: util.numberFormatter( parseFloat(this.subtotal).toFixed(2)),
			tax: util.numberFormatter( parseFloat(this.tax).toFixed(2) ),
			total: util.numberFormatter( parseFloat( this.total ).toFixed(2) ),
			matte: util.numberFormatter( parseFloat(this.matte).toFixed(2) ),
			profile: this.profile,
			comment: this.comment,
			color: this.color,
			defaultText_1: this.defaultText_1,
			defaultText_2: this.defaultText_2,
			defaultText_3: this.defaultText_3,
			defaultText_4: this.defaultText_4,
			defaultText_5: this.defaultText_5,
			defaultText_6: this.defaultText_6,
			appendText: this.appendText,
			useDefault: this.useDefault,
			reno:this.reno
		}
	}
	
	


	all() {
		return this.#All
	}

}
