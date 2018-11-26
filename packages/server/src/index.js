const functions = require('firebase-functions')
const APIRouter = require('./api/api').default
console.log('info:' + APIRouter)
module.exports = {
  api: functions.https.onRequest(APIRouter)
}
