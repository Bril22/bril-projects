import { EmailTemplate } from '@/component/ui/email-template';
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, phoneNumber, email, subject, message } = body;
        if (!firstName && !phoneNumber && !email && !message) {
            return new Response('Missing fields', { status: 400 });
        }
        console.log('data:', {firstName, phoneNumber, email, subject, message})
        const { data, error } = await resend.emails.send({
            from: 'contact-bril@resend.dev',
            to: ['fttmbril22@gmail.com'],
            subject: 'Test contact email',
            react: EmailTemplate({
                firstName,
                phoneNumber,
                email,
                subject,
                message
            }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
