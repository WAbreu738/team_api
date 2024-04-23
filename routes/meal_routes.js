const meal_router = require('express').Router()

meal_router.get('/test', (req, res) => {
    res.send('route works!')
})


module.exports = meal_router