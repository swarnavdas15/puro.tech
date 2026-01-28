import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const { name, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false });
  }

  try {
    /* ================= IP & LOCATION ================= */

    // Client IP (Vercel standard)
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket?.remoteAddress ||
      "Unknown";

    // Location headers (provided by Vercel / Edge)
    const country = req.headers["x-vercel-ip-country"] || "Unknown";
    const region = req.headers["x-vercel-ip-country-region"] || "Unknown";
    const city = req.headers["x-vercel-ip-city"] || "Unknown";

    // Device / Browser info
    const userAgent = req.headers["user-agent"] || "Unknown";

    /* ================= MAIL ================= */

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"PURO TECH Website" <${process.env.MAIL_USER}>`,
      to: "puro.tech.ofcl@gmail.com",
      subject: `New Contact — ${service || "General"}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <h3>User Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>

        <h3>Message</h3>
        <p>${message}</p>

        <hr />

        <h3>Technical Information</h3>
        <p><strong>IP Address:</strong> ${ip}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>User Agent:</strong> ${userAgent}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}
