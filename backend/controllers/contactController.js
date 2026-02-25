import nodemailer from "nodemailer";
import Contact from "../models/Contact.model.js";

export const createContact = async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ success: false });
    }

    // 1️⃣ Save to DB
    const contact = await Contact.create({
      fullName,
      email,
      phone,
      message,
    });

    // 2️⃣ Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3️⃣ Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting us",
      html: `
        <h3>Hello ${fullName}</h3>
        <p>We received your message.</p>
        <p>We will contact you soon.</p>
      `,
    });

    console.log("EMAIL SENT SUCCESSFULLY");

    // 4️⃣ Send response LAST
    res.status(201).json({
      success: true,
      message: "Contact saved + email sent",
      data: contact,
    });

  } catch (err) {
    console.log("EMAIL ERROR:", err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};