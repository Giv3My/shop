const nodemailer = require('nodemailer');
require('dotenv').config();

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });
  };

  async sendOrderNumberMail(to, order) {
    await this.transporter.sendMail({
      from: process.env.MAIL_USER,
      to,
      subject: 'You made new order',
      text: '',
      html: `
        <div>
          <h2>Order number</h2>
          <span>${order}</span>
        </div>
      `
    });
  };
};

module.exports = new MailService();