const { DataTypes, Model } = require('sequelize');
const client = require('../db/client')

class Team extends Model { }

Team.init(
  {
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: false,
          msg: 'You must provide a name for the team.'
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: false,
          msg: 'You must provide a type for the team.'
        }
      }
    },
    coach: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize: client,
    modelName: 'team',
    timestamps: false
  }
)

module.exports = Team