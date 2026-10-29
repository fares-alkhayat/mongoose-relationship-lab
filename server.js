// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const morgan = require('morgan')

const User = require('./models/User')
const Listing = require('./models/Listing')
const Review = require('./models/Review')
const Category = require('./models/Category')

// Middleware
app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT
app.use(methodOverride('_method'))
app.use(morgan('dev'))


async function conntectToDB(){ //connection to the database
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}

conntectToDB()


// Relationship tests

async function createUser1(){
    const newUser = await User.create({
        username: 'yamada_taro_123', password: 'abcd1234'
    })
}

async function createUser2(){
    const newUser = await User.create({
        username: 'alan_muraoka_456', password: 'abcd1234'
    })
}

async function createListing(){
    const newListing = await Listing.create({
        streetAddress: "123 Sesame Street",
        city: "Manhattan, NY",
        price: 100,
        size: 1,
        owner: '6ae32b7af87fbeda6dfbb641',
        category: 'single-bedroom'
    })
}

async function testRelationships(){

}

async function listing(){
    const showListing = await Listing.find().populate('owner')
    console.log(showListing)
}

//createUser1()
//createUser2()
//createListing()
// testRelationships()
listing()

// Routes go here

app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) // Listen on port 3000
