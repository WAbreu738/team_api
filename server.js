const client = require('./db/client')
const { Team, Player } = require('./models')



client.sync({ force: false })
  .then(async () => {

    const julie = await Player.findByPk(1, {
        include: Team
    })
    // // const julie = await Player.findByPk(2)

    // console.log(julie.get({ plain: true }))

    // console.log('Player has been added')

    // const braves = await Team.create({
    //     name: 'Braves',
    //     type: 'baseball',
    //     coach: 'Brian Snitker'
    // })

    // console.log(braves)

    // const julie =  await Player.create({
    //     email: 'julie@test.com',
    //     password: 'password123',
    //     first_name: 'julie',
    //     last_name: 'Wilson',
    //     age: 15
    // })

    // console.log(julie)
  })