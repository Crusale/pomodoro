import * as functions from 'firebase-functions'

const mainJsFile = require('./dist/server/main.js')
exports.ssr = functions.https.onRequest(mainJsFile.app())

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
