import { Injectable } from '@nestjs/common';
import * as Mailjet from 'node-mailjet';

@Injectable()
export class EmailService {
  private mailjet;

  constructor() {
    this.mailjet = new Mailjet.Client({
      apiKey: process.env.MAILJET_API_KEY,
      apiSecret: process.env.MAILJET_API_SECRET,
    });
  }

  async sendEmail(to: string, subject: string, text: string, html: string) {
    try {
      const request = await this.mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: process.env.MAILJET_SENDER_EMAIL,
              Name: 'Tu Aplicación',
            },
            To: [
              {
                Email: to,
              },
            ],
            Subject: subject,
            TextPart: text,
            HTMLPart: html,
          },
        ],
      });
      return request.body;
    } catch (error: any) {
      throw new Error(`Error sending email: ${error.message}`);
    }
  }
}







// import { Injectable } from '@nestjs/common';
// import { Mailjet } from 'nodemailer'
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class EmailService {
//   private readonly mailjet: Mailjet;

//   constructor(private readonly configService: ConfigService) {
//     this.mailjet = new Mailjet(
//       this.configService.get('MAILJET_API_KEY'),
//       this.configService.get('MAILJET_SECRET_KEY'),
//     );
//   }

//   async sendMail(to: string, subject: string, text: string, html?: string): Promise<void> {
//     const request = this.mailjet.post('send', {
//       Messages: [
//         {
//           FromEmail: this.configService.get('MAILJET_FROM_EMAIL'),
//           FromName: this.configService.get('MAILJET_FROM_NAME'),
//           To: [{ Email: to }],
//           Subject: subject,
//           TextPart: text,
//           HTMLPart: html,
//         },
//       ],
//     });

//     await request.then((result) => {
//       console.log(result.body);
//     }).catch((error) => {
//       console.log(error.statusCode);
//       console.log(error.message);
//     });
//   }
// }