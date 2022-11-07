const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "mcarrollgom@uniminuto.edu.co",
          pass: "zndlvwcpbyhjwqhy"
        }
      });
    const mensaje={
        from: "VetyShop Store <mcarrollgom@uniminuto.edu.co>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;