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
    /* ================= TRANSPORTER ================= */

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // Gmail App Password
      },
    });

    /* ================= IP & LOCATION ================= */

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket?.remoteAddress ||
      "Unknown";

    const country = req.headers["x-vercel-ip-country"] || "Unknown";
    const region = req.headers["x-vercel-ip-country-region"] || "Unknown";
    const city = req.headers["x-vercel-ip-city"] || "Unknown";
    const userAgent = req.headers["user-agent"] || "Unknown";

    /* ================= ADMIN MAIL ================= */

    await transporter.sendMail({
      from: `"PURO TECH Website" <${process.env.MAIL_USER}>`,
      to: "puro.tech.ofcl@gmail.com",
      subject: `New Contact — ${service || "General"}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>

        <h3>Message</h3>
        <p>${message}</p>

        <hr />

        <h3>Technical Info</h3>
        <p><strong>IP:</strong> ${ip}</p>
        <p><strong>Location:</strong> ${city}, ${region}, ${country}</p>
        <p><strong>Device:</strong> ${userAgent}</p>
      `,
    });


    const whatsappMessage = `
New Contact Form Lead 🚨

Name: ${name}
Email: ${email}
Service: ${service || "Not specified"}

Message:
${message}

Location:
${city}, ${region}, ${country}
IP: ${ip}
`;

const whatsappUrl = `https://wa.me/918889287261?text=${encodeURIComponent(
  whatsappMessage
)}`;

    /* ================= AUTO REPLY (USER) ================= */


<div style="padding:32px; color:#e0e0e0; line-height:1.7;">


  <p style="font-size:15px; margin-top:0;">
    Hi <strong>${name}</strong>,
  </p>

  <p>
    Thank you for contacting <strong>PURO TECH</strong>.
    Your inquiry regarding
    <strong>${service || "our services"}</strong>
    has been successfully received.
  </p>

  <p>
    Our team will get back to you shortly with clear next steps.
  </p>

 
  <div
    style="
      margin-top:26px;
      display:flex;
      justify-content:flex-end;
      gap:16px;
      opacity:0.85;
    "
  >
    <img
      src="https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/boy-mascot.png"
      alt="Roni"
      height="72"
      style="display:block;"
    />
    <img
      src="https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/girl-mascot.png"
      alt="Puchu"
      height="72"
      style="display:block;"
    />
  </div>

 
  <div style="
    margin:32px 0;
    padding:22px;
    background:#000;
    border-radius:16px;
    border:1px solid #2a0a0c;
    text-align:center;
  ">
    <p style="margin:0 0 14px; font-size:14px; color:#ccc;">
      Need a quicker response?
    </p>

    <a
      href="https://wa.me/918889287261?text=Hi%20PURO%20TECH,%20I%20just%20submitted%20a%20query%20on%20your%20website."
      target="_blank"
      style="
        display:inline-flex;
        align-items:center;
        gap:10px;
        padding:12px 30px;
        background:#25D366;
        color:#000;
        text-decoration:none;
        border-radius:999px;
        font-weight:600;
        font-size:14px;
      "
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width="18"
        height="18"
        style="display:block;"
      />
      Chat on WhatsApp
    </a>
  </div>

  <p style="margin-top:28px;">
    — The PURO Tech Team<br />
    <span style="font-size:13px; color:#9a9a9a;">
      Secure • Scalable • Modern Digital Solutions
    </span>
  </p>
</div>



    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}
