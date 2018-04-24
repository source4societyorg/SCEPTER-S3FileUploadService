'use strict'
const utilities = require('@source4society/scepter-utility-lib')
const genericHandlerFunction = require('@source4society/scepter-handlerutilities-lib').genericHandlerFunction

module.exports.getSignedUrl = (event, context, callback, injectedGenericHandler) => {
  const genericHandler = utilities.valueOrDefault(injectedGenericHandler, genericHandlerFunction)
  genericHandler(event, context, callback, (service, callbackHandler, errorHandler, successHandler, eventData) => {
    const bucketName = event.bucketName
    const fileKey = event.fileKey
    const objectFunction = event.objectFunction
    service.getSignedUrl((err, data) => callbackHandler(err, data, errorHandler, successHandler), objectFunction, bucketName, fileKey)
  })
}
