import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface FormData {
        name: string;
        email: string;
        subject: string;
        phone: string;
        message: string;
    }

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
    const { name, email, subject, phone, message }: FormData = await req.json();
   
    try {
        const response = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: "inamcyber61@gmail.com", 
            subject: `New Message from ${name}`,
            html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
        });
       

       return NextResponse.json({ message: 'Email sent successfully!', status: 200 }, {status:200});
    } catch (error) {
   
        return NextResponse.json({ message: 'Failed to send email.', status: 500 }, {status:500});
    }
}
