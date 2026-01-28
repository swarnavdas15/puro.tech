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

    /* ================= AUTO REPLY (USER) ================= */

    await transporter.sendMail({
      from: `"PURO TECH" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "We’ve got your message — PURO TECH",
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background:#0b0203; padding:24px;">
          <div style="max-width:620px; margin:auto; background:#111; border-radius:14px; border:1px solid #2a0a0c; overflow:hidden;">

            <!-- HEADER (TEXT LOGO) -->
            <div style="padding:20px 24px; background:#000; border-bottom:1px solid #2a0a0c;">
              <h2 style="margin:0; font-weight:700; letter-spacing:1px;">
                <span style="color:#ffffff; font-size:24px;">PURO</span>
                <span style="color:#ef4444; font-size:22px;"> TECH</span>
              </h2>
              <p style="margin:4px 0 0; font-size:13px; color:#aaa;">
                Thanks for reaching out
              </p>
            </div>

            <!-- BODY -->
            <div style="padding:24px; color:#ddd; line-height:1.6;">
              <p>Hi <strong>${name}</strong>,</p>

              <p>
                Thanks for getting in touch with <strong>PURO TECH</strong>.
                We’ve received your message regarding
                <strong>${service || "your inquiry"}</strong>.
              </p>

              <p>
                Our team is already reviewing the details and will get back to
                you shortly with clear next steps.
              </p>

              <!-- MASCOTS -->
              <div style="margin:28px 0; display:flex; justify-content:center; gap:32px;">
                <img
                  src="https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/boy-mascot.png"
                  alt="Roni"
                  height="110"
                />
                <img
                  src="https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/girl-mascot.png"
                  alt="Puchu"
                  height="110"
                />
              </div>

              <p style="text-align:center; font-size:14px; color:#bbb;">
                Roni &amp; Puchu are here to guide you through the next steps.
              </p>

              <p style="margin-top:28px;">
                — The PURO Team<br />
                <span style="font-size:13px; color:#aaa;">
                  Turning ideas into secure, scalable digital solutions
                </span>
              </p>
            </div>

            <!-- FOOTER -->
            <div style="padding:14px 24px; background:#000; border-top:1px solid #2a0a0c; font-size:12px; color:#888; text-align:center;">
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
