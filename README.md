# Data Modeling - Exercise #2 - References (Ref)

In this exercise we want to train create relationships between MongoDB collections.

We will do so by create a basic Pizza shop data model.

## Task: Create a pizza shop data model

* Use the given server.js file as starting point or continue with your server.js file from your previous exercise

* Create Mongoose schemas for your pizza store data model
    * Create a pizza schema
    * Create an order schema

* Setup relationships between Pizzas, Orders and Customers
    * use the special "ref" field for that + type: Schema.Types.ObjectId for the ID:
    `e.g. { type: Schema.Types.ObjectId, ref: 'OtherModel' } `
    * Place a ref to the customer in the order schema 
        * "Every order has exaxtly ONE customer"
    * Place a array ref to the pizzas schema in the order schema
        * "Every order has 1 to many pizzas"


### Bonus Task

* Outsource the schemas + models to a folder "models" 
    * Create a file for each schema: customer.js, order.js, pizza.js
    * Cut & paste the schemas and models into these files
    * Export the schema & te model at the end of each file using module.exports
* If some schemas rely on other schemas
    * Import the schema here
* Import the models in your server.js file