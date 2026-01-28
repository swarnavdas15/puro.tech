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

  await transporter.sendMail({
  from: `"PURO TECH" <${process.env.MAIL_USER}>`,
  to: email,
  subject: "We’ve got your message — PURO TECH",
  html: `
    <div style="font-family: Arial, Helvetica, sans-serif; background:#0b0203; padding:32px;">
      <div style="max-width:640px; margin:auto; background:#0f0f0f; border-radius:18px; border:1px solid #2a0a0c; overflow:hidden;">

        <!-- HEADER WITH MASCOTS -->
        <div style="
          padding:22px 26px;
          background:linear-gradient(135deg,#000,#140406);
          border-bottom:1px solid #2a0a0c;
          display:flex;
          align-items:center;
          justify-content:space-between;
        ">

          <!-- Left Mascot -->
          <img
            src="https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/boy-mascot.png"
            alt="Roni"
            height="64"
            style="display:block;"
          />

          <!-- BRAND -->
          <div style="text-align:center;">
            <h2 style="margin:0; font-weight:700; letter-spacing:1px;">
              <span style="color:#ffffff; font-size:26px;">PURO</span>
              <span style="color:#ef4444; font-size:24px;"> TECH</span>
            </h2>
            <p style="margin:6px 0 0; font-size:13px; color:#b3b3b3;">
              We’ve received your message
            </p>
          </div>

          <!-- Right Mascot -->
          <img
            src="https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/girl-mascot.png"
            alt="Puchu"
            height="64"
            style="display:block;"
          />
        </div>

        <!-- BODY -->
        <div style="padding:28px; color:#e0e0e0; line-height:1.7;">

          <p style="font-size:15px;">
            Hi <strong>${name}</strong>,
          </p>

          <p>
            Thank you for contacting <strong>PURO TECH</strong>.  
            Your inquiry regarding <strong>${service || "our services"}</strong>
            has been successfully received.
          </p>

          <p>
            Our team is currently reviewing the details and will reach out to you
            shortly with clear next steps.
          </p>

          <!-- ACTION CARD -->
          <div style="
            margin:26px 0;
            padding:18px;
            background:#000;
            border-radius:14px;
            border:1px solid #2a0a0c;
            text-align:center;
          ">
            <p style="margin:0 0 12px; font-size:14px; color:#ccc;">
              Prefer a quicker conversation?
            </p>

            <a
              href="https://wa.me/918889287261?text=Hi%20PURO%20TECH,%20I%20just%20submitted%20a%20query%20on%20your%20website."
              target="_blank"
              style="
                display:inline-block;
                padding:12px 28px;
                background:#ef4444;
                color:#ffffff;
                text-decoration:none;
                border-radius:999px;
                font-weight:600;
                font-size:14px;
              "
            >
              Chat on WhatsApp
            </a>
          </div>

          <p style="margin-top:30px;">
            — The PURO Team<br />
            <span style="font-size:13px; color:#9a9a9a;">
              Secure • Scalable • Thoughtful Digital Solutions
            </span>
          </p>
        </div>

        <!-- FOOTER -->
        <div style="
          padding:16px 26px;
          background:#000;
          border-top:1px solid #2a0a0c;
          font-size:12px;
          color:#888;
          text-align:center;
        ">
          This is an automated confirmation email. No reply is required.
        </div>

      </div>
    </div>
  `,
});


    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}
