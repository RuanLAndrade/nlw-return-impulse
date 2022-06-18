import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "457fbbb395b898",
    pass: "c0d7a104f24069"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Ruan L Andrade <ruanlandrade@outlook.com>",
      subject,
      html: body,
    });
  }
}
