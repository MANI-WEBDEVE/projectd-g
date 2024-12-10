declare module 'resend' {
    export class Resend {
        constructor(apiKey: string);
        emails: {
            send: (data: {
                from: string;
                to: string;
                subject: string;
                html: string;
            }) => Promise<EmailResponse>;
        };
    }

    interface EmailResponse {
        success: boolean;
        messageId: string;
        // Add other relevant fields based on the actual response structure
    }
}
