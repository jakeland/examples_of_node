var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AuthorSchema = new Schema({
	first_name: {type: String, required: true, max: 100},
	family_name: {type: String, required: true, max: 100},
	date_of_birth: {type: Date},
	date_of_death: {type: Date},
});

//Virtual for author's full name
AuthorSchema.virtual('name').get(function(){
	var fullname = '';
	if (this.first_name && this.family_name){
		fullname = this.family_name + ', ' + this.first_name
	}
	if (!this.first_name || !this.family_name){
		// this is just to handle any weird error where the name is missing 
		// it'd be better to do some actual error handling, 
		// for the sake of quickness I'm just going to follow along for right now. 
		fulname = '';
	}
	return fullname;
});

//Virtual for author's lifespan

AuthorSchema.virtual('lifespan').get(function(){
	// not accurate and what if they haven't died? again following along. 
	return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString
});

AuthorSchema.virtual('url').get(function(){
	return '/catalog/author/' + this._id;
});

Export model
module.exports = mongoose.model('Author', AuthorSchema);