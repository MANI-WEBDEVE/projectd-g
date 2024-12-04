declare module 'resend' {
    export class Resend {
        constructor(apiKey: string);
        emails: {
            send: (data: {
                from: string;
                to: string;
                subject: string;
                html: string;
            }) => Promise<any>;
        };
    }
}
