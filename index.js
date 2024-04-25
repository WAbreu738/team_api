const { Sequelize, DataTypes, Model } = require('sequelize')
const { hash, compare } = require('bcrypt')

const client = new Sequelize(
    'sequelize_practice_db',
    'postgres',
    'pass',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

class Note extends Model { }

Note.init(
    {
        text: {
            type: DataTypes.STRING, //VARCHAR(255)
            allowNull: false
        }
    },
    {
        sequelize: client
    }
)

class User extends Model {
    async validatePass (formPassword) {
        const is_valid = await compare(formPassword, this.password)

        return is_valid
    }
}

User.init(
    {
        email: {
            type: DataTypes.STRING, //VARCHAR(255)
            validate: {
                isEmail: true
            },
            allowNull: false
        },
        password: {
            type: DataTypes.STRING, //VARCHAR(255)
            validate: {
                len: 6
            },
            allowNull: false
        }
    },
    {
        sequelize: client,
        hooks: {
            async beforeCreate(user) {
                user.password = await hash(user.password, 10)
            }
        }
    }
)

//One to Many Relationship 
User.hasMany(Note) //generate a UserID on each note
Note.belongsTo(User) //sets userId on each  note 

client.sync({ force: false })
    .then(async () => {

        try {

            const user = await User.findByPk(4)
            const formPassword = 'password123'

            const valid = await user.validatePass(formPassword)
            console.log(valid)
            // await User.destroy({
            //     where: {},
            //     truncate: true
            // })
            // const user = await User.findOne({
            //     where: {
            //         email: 'jd@test.com'
            //     },
            //     include: Note
            // })

            // console.log(user.Notes)
            // const note = await jd.createNote({
            //     text: 'Note one for jd',
            //     UserId: user.id
            // })

            // const jd = await User.findByPk(1)
            // const note = await jd.createNote({
            //     text: 'Note one for jd'
            // })
            //     const user = await User.create({
            //         email: 'wes@test.com',
            //         password: 'password123'
            // })

        } catch (err) {
            console.log(err)
        }
        // Create a new row in the table
        // const note = await Note.create({
        //     text: 'Text for note one'
        // })

        // Find allnotes
        // const notes = await Note.findAll({
        //     attributes: ['text'],
        //     where: {
        //         id: 1
        //     }
        // })

        // const note = await Note.findByPk(3)

        // console.log(note)

        // Note.findAll()
        //   .then(notes => {
        //     console.log(notes[1].text)
        //   })

        // `
        // UPDATE Notes SET text = 'Some new text' WHERE id = 2
        // `

        // const results = await Note.update(
        //     {
        //         text: 'New text for note 1'
        //     },
        //     {
        //         where: {
        //             id: 1
        //         },
        //         returning: true
        //     }
        // )

        //     `
        //     DELETE FROM Notes WHere id = 1
        //     `

        //     const results = await Note.destroy ({
        //        where: {
        //         id: 1
        //     }
        // })

        //     console.log(results)
    })