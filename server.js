const express = require("express")
const mongoose = require("mongoose")
const app = express()
const Schema = mongoose.Schema

// CONNECT TO MONGO DB - Pizza database
mongoose.connect("mongodb://localhost/pizza_db", {
    useFindAndModify: false, 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// MONGOOSE SCHEMA TO DEFINE HOW EACH CUSTOMER SHOULD LOOK LIKE
const CustomerSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    gender: { type: String, enum: ["female", "male"], default: "female" },
    address: {
        type: {
            street: String,
            zipcode: Number, 
            city: String
        },
        required: true
    }
})

// Create a Model to perform CRUD operations on the customer collection in MongoDB 
const Customer = mongoose.model("Customer", CustomerSchema)

// START SERVER ON PORT 3000
const port = 3000
app.listen(port, () => {
    console.log('Server started on port ' + port);
});

// parse incoming JSON data into req.body
app.use(express.json()); 

// HOME ROUTE
app.get('/', (req, res) => {
    res.send("Hello World");
});
