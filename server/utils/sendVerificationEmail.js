const sendEmail = require('../utils/sendEmail');

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin, //url
}) => {
  const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;
  const message = `<p>Please confirm your email by clicking the following link: <a href="${verifyEmail}">Verify Email</a></p>`;
  return sendEmail({
    to: email,
    subject: 'Email Confirmation',
    html: `<h3>Hello, ${name}<h3> ${message}`,
  });
};

module.exports = sendVerificationEmail;
