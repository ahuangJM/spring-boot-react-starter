// Custom Jest transform implementation that wraps babel-jest and injects our babel presets
module.exports = require('babel-jest').createTransformer(require('./babel.config.js'));
