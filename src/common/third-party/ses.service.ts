import { Injectable } from '@nestjs/common';
import { SES } from 'aws-sdk';

@Injectable()
export class SESService {
  private readonly ses: SES;

  constructor() {
    this.ses = new SES({
      // temporary hard code here => update soon
      region: 'eu-west-3',
      accessKeyId: 'AKIAVD23BXxxxxxxxxxx',
      secretAccessKey: '',
    });
  }

  async sendConfirmationEmail(
    to: string,
    confirmationCode: string,
  ): Promise<void> {
    const fromAddress = `noreply.ambulife@gmail.com`;
    const subject = 'Confirm your account';
    const body = `Your confirmation code is: ${confirmationCode}`;

    const params = {
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Body: {
          Text: { Data: body },
        },
        Subject: { Data: subject },
      },
      Source: fromAddress,
    };

    await this.ses.sendEmail(params).promise();
  }
}
