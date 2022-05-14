import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "39cb952e0e20e8",
    pass: "83becff95cbf87",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Team Feedget <hello@feedget.com.br>",
      to: "Gustavo Henrique <hsdpgustavo@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
