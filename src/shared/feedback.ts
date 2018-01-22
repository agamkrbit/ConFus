export interface Feedback {
    fistname: string;
    lastname: string;
    telnum: string;
    email: string;
    agree: boolean;
    contacttype: string;
    message: string;
}

export const ContactType = ['None', 'Tel', 'Email'];