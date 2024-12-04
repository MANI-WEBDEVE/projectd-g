import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, subject, phone, message } = req.body;

    try {
        const response = await resend.emails.send({
            from: 'Your Name <tryfrelancer23@gmail.com>',
            to: 'nudmaufon@gmail.com',
            subject: `New Message from ${name}`,
            html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Email:</strong> ${subject}</p>
          <p><strong>Email:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
        });

        res.status(200).json({ message: 'Email sent successfully!', response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email.', error });
    }
}
