const { DataTypes, Model } = require('sequelize');
const client = require('../db/client')
const { hash, compare } = require('bcrypt')

class Player extends Model {
  async validatePass(formPassword) {
    const is_valid = await compare(formPassword, '')

    return is_valid
  }

  toJSON() {
    const player = Object.assign({}, this.get())

    delete player.password

    return player
  }
}

Player.init(
  {
    player_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      // Does not allow a player with the same email address to create an account
      unique: true,
      validate: {
        isEmail: {
        args: true,
        msg: 'You must provide a valid email string'
        }
      },
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: 6
      },
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: client,
    modelName: 'player',
    hooks: {
      async beforeCreate(user) {
        user.password = await hash(user.password, 10)
      }
    },
    // Do not include createdAt and updatedAt fields
    timestamps: false
  }
)

module.exports = Player