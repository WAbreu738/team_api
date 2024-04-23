const view_router = require('express').Router()

// Show homepage
view_router.get('/', (req, res) => {
    res.render('landing', {
        name: 'Bob',
        fruits: ['oragne', 'apple', 'grape'],
        notes: [
            {
                id: 1,
                title: 'Note One',
                text: 'text for note one'
            },
            {
                id: 2,
                title: 'Note Two',
                text: 'text for note two'
            },
            {
                id: 3,
                title: 'Note 3',
                text: 'text for note 3'
            },
        ]
    })
})

//Show meal form page
view_router.get('/create', (req, res) => {
    res.render('meal_form', {
        title: 'Add a Meal'
    })

})

view_router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register User'
    })
})

module.exports = view_router