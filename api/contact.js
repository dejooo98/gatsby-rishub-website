import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body

    const emailBody = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USERNAME,
        to: process.env.RECIPIENT_EMAIL,
        subject: "New Contact Form Submission",
        text: emailBody,
      })

      res.status(200).json({ message: "Form submission successful" })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Form submission failed" })
    }
  } else {
    res.status(404).json({ message: "Invalid request method" })
  }
}
