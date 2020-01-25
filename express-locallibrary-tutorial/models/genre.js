// the one I have to create from scratch
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
	genre: { type: String, required: true, unique: true} //only one genre of each type can exist. 
});

GenreSchema
.virtual('url')
.get(function(){
	// using this.genre to get the name of the genre and use it for the id
	return '/genre/' + this.genre;
});

module.exports = mongoose.model('Genre', GenreSchema);
