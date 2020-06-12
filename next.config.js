const path = require('path')
const envD = require('./env');

module.exports = {
  env: envD,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}