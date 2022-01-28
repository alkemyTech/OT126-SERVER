const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
require('dotenv').config()

const bucketName = process.env.AWS_BUCKETNAME
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const storage = new S3({
  accessKeyId,
  secretAccessKey
})

// example -> {path: '/temp/123123.jpg'}
const uploadFile = async (file) => {
  const fileStream = fs.createReadStream(file.path)
  const fileName = uuidv4() + '.jpg'

  const uploadParams = {
    ACL: 'public-read',
    Bucket: bucketName,
    Body: fileStream,
    Key: fileName
  }

  return storage.upload(uploadParams).promise()
}

const deleteFile = async (keyValue) => {
  const params = {
    Bucket: bucketName,
    Key: keyValue
  }
  return storage.deleteObject(params).promise()
}

module.exports = {
  uploadFile,
  deleteFile
}
