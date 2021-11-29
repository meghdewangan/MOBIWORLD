/* Mongo Database
* - this is where we set up our connection to the mongo database
*/
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let MONGO_URL
const MONGO_LOCAL_URL = 'mongodb+srv://meghdewangan:6261071790@cluster0.9e8hr.mongodb.net/mydb?retryWrites=true&w=majority' //** OLX is Name of Database **/

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI)
	MONGO_URL = process.env.MONGODB_URI
} else {
	mongoose.connect(MONGO_LOCAL_URL) // local mongo url
	MONGO_URL = MONGO_LOCAL_URL
}

// Connect to Mongo
mongoose
.connect(MONGO_URL)
.then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(`MongoDB Not Connected:${err}`));


// should mongoose.connection be put in the call back of mongoose.connect???
// const db = mongoose.connection
// db.on('error', err => {
// 	console.log(`There was an error connecting to the database: ${err}`)
// })
// db.once('open', () => {
// 	console.log(
// 		`You have successfully connected to your mongo database: ${MONGO_URL}`
// 	)
// })

module.exports = mongoose