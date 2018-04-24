# SCEPTER-S3PresignedURLService

[![scepter-logo](http://res.cloudinary.com/source-4-society/image/upload/v1519221119/scepter_hzpcqt.png)](https://github.com/source4societyorg/SCEPTER-core)

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

[![Build Status](https://travis-ci.org/source4societyorg/SCEPTER-S3PresignedURLService.svg?branch=master)](https://travis-ci.org/source4societyorg/SCEPTER-S3PresignedURLService)

[![codecov](https://codecov.io/gh/source4societyorg/SCEPTER-service-template-nodejs/branch/master/graph/badge.svg)](https://codecov.io/gh/source4societyorg/SCEPTER-S3PresignedURLService)

[![Serverless](http://public.serverless.com/badges/v1.svg)](http://serverless.com)

This service will take a file from POST data and upload it to an S3 bucket.

## System Requirements

Currently this project has been tested primarily with /bin/bash for Ubuntu 16.04 and powershell for Windows 10. We would like to eventually support a wider number of systems and contributions to this effect are welcome.

`git` at least version 1.9 should be installed, as well as `yarn`.

See the [Serverless framework](https://serverless.com) provider specific limitations for which version of nodejs to install as different providers have different limitations. We recommend using [nvm](https://github.com/creationix/nvm) to switch between different versions of nodejs on your machine if you can.

It is also a good idea to familiarize yourself with [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) as the framework relies heavily on them, although much effort has been made to simplify some of the submodule commands.

This project makes use of the [Serverless Framework](http://serverless.com)

If you are running the commands via powershell, be sure to install the windows-build-tools with the following command:

    npm install --global --production windows-build-tools

## Usage

This repository was designed to be used with the SCEPTER framework. Once you have a SCEPTER project setup and initialized, run the 

  node bin/scepter service:add

command to learn how to build a new service based on this repository.

You can invoke this service with the following payload:

    {
      "bucketName": "targetbucket"
      "fileKey": "targetobject"
      "objectFunction": "getObject" // or putObject
    }

See the [AWS SDK Docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getSignedUrl-property) for more information about what those parameters do.