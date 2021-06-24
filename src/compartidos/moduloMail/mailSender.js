import nodemailer from "nodemailer";

async function crearMailSender({ host, user, pass }) {

  let transporter = nodemailer.createTransport({
    host,
    auth: {
      user,
      pass
    },
  });

  return {
    enviarMailSinAdjunto: async ({ destinatario, subject, text }) => {
      let info = await transporter.sendMail({
        from: user,
        to: destinatario,
        subject: subject,
        text: text,
      });
      return info
    },
    enviarMailConAdjunto: async ({ destinatario, subject, text, filename, path }) => {
      let info = await transporter.sendMail({
        from: user,
        to: destinatario,
        subject: subject,
        text: text,
        attachments: { filename, path }
      });
      return info
    }

  }

}

export { crearMailSender }