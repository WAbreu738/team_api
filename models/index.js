const Player = require('./Player')
const Team = require('./Team')

Team.belongsToMany(Player, { through: 'team_player' })
Player.belongsToMany(Team, { through: 'team_player' })

module.exports = {
    Team: Team,
    Player: Player
}