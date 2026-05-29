const nodemailer = require("nodemailer");
require("dotenv").config();

async function mailSender(email, title, body) {
    try {
        const transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })

        let info = await transporter.sendMail({
            from:"Bankify",
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`
        })
        console.log("info::",  info);
        return info;
    } catch (error) {
        console.log(error);
    }
}

exports.sendRegistrationEmail = async (email) => {
    const subject = "Welcome to Bankify!"; 
    const body = `
        <h1>Welcome to Bankify!</h1>
        <p>Thank you for registering with Bankify. We're excited to have you on board!</p>
        <p>With Bankify, you can easily manage your finances, track your transactions, and stay on top of your budget.</p>
        <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
        <p>Happy banking!</p>
    `;
    await mailSender(email, subject, body);

}

