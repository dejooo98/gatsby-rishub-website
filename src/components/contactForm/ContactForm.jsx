import React, { useState } from "react"

export const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        console.log("Form submitted successfully!")
      } else {
        console.log("Form submission failed.")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}
