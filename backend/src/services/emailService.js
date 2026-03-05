const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendDownloadNotification = async (downloadInfo) => {
    const { userAgent, downloadDate } = downloadInfo;

    await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: process.env.NOTIFY_EMAIL,
        subject: "📥 Novo Download do CV!",
        html: `
            <h2>Alguém baixou seu CV!</h2>
            <p><strong>Data:</strong> ${downloadDate.toLocaleString("pt-BR")}</p>
            <p><strong>Navegador:</strong> ${userAgent}</p>        
        `,
    });
};

module.exports = { sendDownloadNotification };