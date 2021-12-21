const nodemailer = require("nodemailer");
const nodemailerConfig = require("../utils/nodemailerConfig");
const sendEmail = async ({ to, subject, html }) => {
  let accounttest = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport(nodemailerConfig);
  return transporter.sendMail({
    from: '"Johny" <johny@gmail.com>', // sender address
    to,
    subject,
    html,
  });

  //   let info = await transporter.sendMail({
  //     from: '"Test"<kale.ankunding69@ethereal.email>',
  //     to: "test@gmail.com",
  //     subject: "This is a sample text",
  //   });
};

module.exports = sendEmail;
