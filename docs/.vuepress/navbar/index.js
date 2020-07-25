const guide = require('./sidebar/guide')
const principle = require('./sidebar/principle')
const cli = require('./sidebar/cli')
module.exports = {
    ...guide,
    ...principle,
    ...cli
}


