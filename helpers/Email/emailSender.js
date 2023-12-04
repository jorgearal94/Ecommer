import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: "luisaralfa@gmail.com",
        pass: "jorge1994",
    },
});

import emailog from "../Email/emailtemplate/emailog.js"

export const sendWellcomEmail=  async() => {
    try {
        const template = await emailog()
        const option = {
            from: ` <${process.env.EMAIL}>`,
            to: "ricardo.torresits@gmail.com",
            subject: "Correo de Bienvenida",
            text: `
                Gracias por registrar
            `,
            html: template,
            attachments: []
        };
        this.SendEmail(option)
    } catch (error) {
        console.log(error)
    }
};
export const SendEmail = (options) => {
    try {
        transporter.sendMail(options, function(err) {
            if (err) console.log(err);
        });
    }
    catch(err) {
        console.log(err);
        throw err
    }

}
