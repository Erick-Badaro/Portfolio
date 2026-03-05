const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendDownloadNotification = async (downloadInfo) => {
    const {userAgent, downloadDate} = downloadInfo;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.NOTIFY_EMAIL,
        subject: "📥 Novo Download do CV!",
        html: `
                <h2> Alguém baixou seu CV!</h2>
                <p><strong> Data:</strong> ${downloadDate.toLocaleString("pt-BR")}</p>
                <p><strong>Navegador:</strong> ${userAgent}</p>        
        `,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = {sendDownloadNotification};