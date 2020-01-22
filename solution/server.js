const express = require("express")
const mongoose = require("mongoose")
const app = express()
const Schema = mongoose.Schema

// CONNECT TO MONGO DB
mongoose.connect("mongodb://localhost/pizza_db", {
    useFindAndModify: false, 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// CUSTOMER SCHEMA
const CustomerSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    gender: { type: String, enum: ["female", "male"], default: "female" },
    // the address we nest inside customer, 
    // because it is a One-to-One relation
    address: {
        type: {
            street: String,
            zipcode: Number,
            city: String
        },
        required: true
    }
})

// PIZZA SCHEMA
const PizzaSchema = new Schema({
    name: String, // e.g. Margherita, Funghi, etc
    price: Number // => Number can also be a float, e.g. 6.50
})

/* ORDER SCHEMA relationships:

    relationship to customer:
        1 order - 1 customer
        1 customer - many orders
        => One-to-Many
    
    relationship to pizza
        1 order - many pizzas
        1 pizza - many orders
        => Many-to-Many
*/
const OrderSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'Customer'},
    pizzas: [{ type: Schema.Types.ObjectId, ref: 'Pizza' }]
})

// SETUP MODELS
const Customer = mongoose.model("Customer", CustomerSchema)
const Order = mongoose.model("Order", OrderSchema)
const Pizza = mongoose.model("Pizza", PizzaSchema)


const port = 3000
app.listen(port, () => {
    console.log('Server started on port ' + port);
});

app.use(express.json()); // parse incoming JSON data into req.body

app.get('/', (req, res) => {
    res.send("Hello World");
});
