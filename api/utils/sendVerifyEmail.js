import nodemailerTransporter from "./nodemailerTransporter.js";


function sendVerifyEmail(player) {
    const transporter = nodemailerTransporter();
    const mailInfos = {
        from: `"Coding Challenge" <${process.env.EMAIL}>`,
        to: player.email,
        subject: 'Veuillez valider votre inscription ...',
        html: `<p>Salut ${player.pseudo}, valides ton inscription en cliquant sur ce lien ...</p>
        <a href="${process.env.URL}/verify-email?emailToken=${player.emailToken}">Verification Link</a>`,
    };
    transporter.sendMail(mailInfos, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Verification email sent')
        }
    });
};

export default sendVerifyEmail