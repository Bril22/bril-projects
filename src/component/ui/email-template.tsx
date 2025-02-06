import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    phoneNumber: string;
    email: string;
    subject: string;
    message: string;
}

export const EmailTemplate = ({
    firstName,
    phoneNumber,
    email,
    subject,
    message,
}: EmailTemplateProps) => {
    return (
        <div className='flex flex-col gap-4 items-center justify-start'>
            <div>
                <h1>New Request</h1>
                <h1>Name: {firstName}</h1>
                <p>Phone Number: {phoneNumber}</p>
                <p>Email: {email}</p>
            </div>
            <div>
                <h2>Subject: {subject}</h2>
                <p>Message: {message}</p>
            </div>
        </div>
    )
}
