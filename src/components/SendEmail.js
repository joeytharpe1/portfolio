import emailjs from 'emailjs-com';

export function SendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mpirq1z', 'template_ih119dc', e.target, 'user_vkmf3e9zWgQNUqhwClkac')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}
