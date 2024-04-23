const router = require('express').Router()

const view_routes = require('./view_routes')
const user_routes = require('./user_routes')
const meal_routes = require('./meal_routes')

// Load our routes at the root
router.use('/', [user_routes, meal_routes, view_routes])

module.exports = router