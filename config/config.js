require('dotenv').config()

module.exports = {
  organizationId: 1,
  adminRoleName: 'Admin',
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  token: {
    secret: process.env.JWT_PASS,
    expiresIn: '1d'
  },
  sendGrid: {
    apiKey: process.env.SENDGRID_API_KEY,
    email: process.env.SENDGRID_EMAIL,
    sendEmails: process.env.SENDGRID_SEND_EMAILS === 'true'
  }
}
