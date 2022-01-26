const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')
require('dotenv').config()

const bucketName = process.env.AWS_BUCKETNAME
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const storage = new S3({
  accessKeyId,
  secretAccessKey
})

// example -> {path: '/temp/123123.jpg', name: 'Categories', id: '2' }
const uploadFile = async (file) => {
  const fileStream = fs.createReadStream(file.path)
  const fileName = file.name + '-' + file.id + '.jpg'

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: fileName
  }

  return storage.upload(uploadParams).promise()
}

const listFiles = async () => {
  return storage.listObjects({ Bucket: bucketName }, (err, data) => {
    if (err) throw err
    return data
  }).promise()
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
  listFiles,
  deleteFile
}
