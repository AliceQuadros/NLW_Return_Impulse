import { MailAdapter, SendmailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b87112021f6ce4",
      pass: "9bdbd25a6891c5"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({subject,body}: SendmailData) {
    await transport.sendMail({
        from:'Equipe Feedget <oi@feedget.com>',
        to:'Alice Quadros <alicequadros63@gmail.com>',
        subject,
        html:body,
    });
   } 
}