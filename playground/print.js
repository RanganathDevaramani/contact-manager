//const city = require('./values').city

// import { city, player, add } from './values';

const { city, player, add} = require('./values')
const ipAddress = require('./ip-config')
console.log(ipAddress)
console.log('city', city)
console.log('player', player)

console.log(add(20, 40))