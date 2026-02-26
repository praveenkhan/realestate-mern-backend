import nodemailer from "nodemailer";
import Contact from "../models/Contact.model.js";

export const createContact = async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Full name, email and message are required",
      });
    }

    // 1️⃣ Save to DB
    const contact = await Contact.create({
      fullName,
      email,
      phone,
      message,
    });

    // 2️⃣ Create transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3️⃣ Send confirmation email to USER
    await transporter.sendMail({
      from: `"Real Estate Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting us",
      html: `
        <h3>Hello ${fullName},</h3>
        <p>We have received your message.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <br/>
        <p>We will contact you shortly.</p>
      `,
    });

    // 4️⃣ Send notification email to ADMIN (YOU)
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Admin email
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("USER + ADMIN EMAIL SENT SUCCESSFULLY");

    res.status(201).json({
      success: true,
      message: "Contact saved + emails sent",
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
