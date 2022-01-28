
const { emailTemplate } = require('../email-template/email-template')

const sendEmailWelcome = async (organization, emailTo, emailFrom) => {
  const headers = {
    to: emailTo,
    from: emailFrom,
    text: `Welcome to ${organization.name}`,
    html: emailTemplate(organization)
  }
  const responseEmail = await transporter.sendMail(headers)
  if (!responseEmail) {

  }
}

module.exports = {
  sendEmailWelcome
}
