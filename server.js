const express = require('express')
const app = express()
const PORT = process.env.PORT || 3333

require('dotenv').config()
const client = require('./db/client')

// Import router/routes
const api_routes = require('./routes/api_routes')

// Open the JSON middleware channel to allow JSON to be sent through request.body
app.use(express.json())

// Load our routes
app.use('/api', api_routes)

// Sync the models and connect to the database
client.sync({ force: false })
  .then(() => {
    // Start the Express server
    app.listen(PORT, () => console.log('Server started on port', PORT))
  })