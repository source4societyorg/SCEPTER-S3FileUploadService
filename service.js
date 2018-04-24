'use strict'
const utilities = require('@source4society/scepter-utility-lib')
const AWSLib = require('aws-sdk')
const fromJS = require('immutable').fromJS
class S3PresignedURLService {
  constructor (injectedStage, injectedCredentialsPath, injectedServicesPath, injectedParametersPath, injectedAWS) {
    const stage = utilities.valueOrDefault(injectedStage, process.env.STAGE)
    const credentialsPath = utilities.valueOrDefault(injectedCredentialsPath, './credentials')
    const servicesPath = utilities.valueOrDefault(injectedServicesPath, './services')
    const parametersPath = utilities.valueOrDefault(injectedParametersPath, './parameters')
    const AWS = utilities.valueOrDefault(injectedAWS, AWSLib)
    this.environment = stage
    this.credentials = fromJS(require(credentialsPath))
    this.services = fromJS(require(servicesPath))
    this.parameters = fromJS(require(parametersPath))
    this.AWS = AWS
  }

  getSignedUrl (uploadCallback, objectFunction, bucketName, fileKey, injectedAWS) {
    const AWS = utilities.valueOrDefault(injectedAWS, this.AWS)
    const s3 = new AWS.S3({apiVersion: '2006-03-01'})
    const params = { Bucket: bucketName, Key: fileKey }
    const signedUrl = s3.getSignedUrl(objectFunction, params)
    uploadCallback(null, signedUrl)
  }

  prepareErrorResponse (error, injectedEnvironment) {
    const environment = utilities.valueOrDefault(injectedEnvironment, this.environment)
    const message = utilities.ifTrueElseDefault(environment === 'development', error.stack, error.message)
    return {
      status: false,
      error: utilities.valueOrDefault(message, error)
    }
  }

  prepareSuccessResponse (data) {
    return {
      status: true,
      result: data
    }
  }
}

module.exports = S3PresignedURLService
