const nodemailer = require("nodemailer");

const mailSender = async(email,title,body)=>{
    const MAIL_USER = 'ujjvalmishra6016@gmail.com';
    const MAIL_PASS = 'bnoyejzxxcvspdwr';
    try {
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:MAIL_USER,
                pass:MAIL_PASS,
            }
        })
        let info = await transporter.sendMail({
            from: 'BusKaro Team',
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        })
        console.log(info);
        return info;

    } catch (error) {
        console.log("error occurs in mailSender : " , error.message);
    }
}

module.exports = mailSender;