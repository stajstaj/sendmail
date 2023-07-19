const nodemailer = require('nodemailer');

const smtpConfig = {
  host: ' ', 
  port: 587, 
  secure: false, 
  auth: {
    user: ' ',
    pass: ' ' 
  },
  tls: {rejectUnauthorized: false}
};

async function sendEmail() {
  try {
    const transporter = nodemailer.createTransport(smtpConfig);

    const emailContent = `
      <h1>Merhaba</h1>
      <p>Lütfen haftalık raporunuzu doldurunuz.</p>
    `;

    //mesaj objesi
    const message = {
      from: ' ',
      to: ' ', 
      subject: 'Test Email from Node.js', 
      html: emailContent
    };

    await transporter.sendMail(message);
    
  } catch (error) {
    console.error('Error occurred while sending the email:', error);
  }
}

sendEmail();

