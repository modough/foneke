import nodemailerTransporter from "./nodemailerTransporter.js";


function sendVerifyEmail(player) {
    const transporter = nodemailerTransporter();
    const mailInfos = {
        from: `"Coding Challenge" <${process.env.EMAIL}>`,
        to: player.email,
        subject: 'Veuillez valider votre inscription ...',
        html: `<div style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">
                    <div style="display: flex; padding: 10px; align-items: center; gap: 5px;">
                        <img src={logoName} alt="site logo" />
                        <img src={logo} alt="site logo" width={30} />
                    </div>
                    <p style="font-size: 16px; color: #333;">
                        Bonjour ${player.pseudo}, veuillez valider votre inscription en cliquant sur ce lien :
                    </p>
                    <button style="padding:10px">
                        <a href="${process.env.URL}/verify-email?emailToken=${player.emailToken}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">
                            Verification Link
                        </a>
                    </button>
                </div>`,
    };
    transporter.sendMail(mailInfos, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Verification email sent')
        }
    });
}

export default sendVerifyEmail