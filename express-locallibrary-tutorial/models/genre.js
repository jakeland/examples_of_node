var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
	name: {type: String, required: true} 
});

GenreSchema.virtual('url').get(function(){
	// using this.genre to get the name of the genre and use it for the id
	return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema);
