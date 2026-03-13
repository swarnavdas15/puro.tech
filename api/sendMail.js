import nodemailer from "nodemailer";
import process from "node:process";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const { name, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket?.remoteAddress ||
      "Unknown";

    const country = req.headers["x-vercel-ip-country"] || "Unknown";
    const region = req.headers["x-vercel-ip-country-region"] || "Unknown";
    const city = req.headers["x-vercel-ip-city"] || "Unknown";
    const userAgent = req.headers["user-agent"] || "Unknown";

    await transporter.sendMail({
      from: `"PURO TECH Website" <${process.env.MAIL_USER}>`,
      to: "puro.tech.ofcl@gmail.com",
      subject: `New Contact - ${service || "General"}`,
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
New Contact Form Lead

Name: ${name}
Email: ${email}
Service: ${service || "Not specified"}

Message:
${message}

Location:
${city}, ${region}, ${country}
IP: ${ip}
`;

    await transporter.sendMail({
      from: `"PURO TECH" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "We've received your message - PURO TECH",
      html: `
        <div style="background:#0b0203; padding:30px; font-family:Arial, Helvetica, sans-serif;">
          <div style="max-width:640px; margin:auto; background:#0f0f0f; border-radius:16px; border:1px solid #2a0a0c; overflow:hidden;">
            <div style="padding:20px 26px; background:#000; border-bottom:1px solid #2a0a0c; display:flex; align-items:center; gap:5px; justify-content:space-between;">
              <h2 style="margin:15px 0 0; font-size:10px; white-space:nowrap;">
                <span style="color:#ffffff;">PURO</span>
                <span style="color:#ef4444;"> TECH.</span>
              </h2>

              <div style="text-align:center; flex:1; margin-top:6px;">
                <p style="margin:30px 0 0 0; font-size:17px; font-weight:600; color:#e5e5e5;">
                  We've successfully received your message
                </p>
                <p style="margin:4px 0 0 0; font-size:13px; color:#a3a3a3;">
                  Our team is reviewing it and will contact you shortly
                </p>
              </div>
            </div>

            <div style="padding:45px; color:#e0e0e0; line-height:1.7; font-size:15px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div style="max-width:75%; z-index:2;">
                  <p style="margin:0;">Hi <strong>${name}</strong>,</p>
                  <p>
                    Thank you for contacting <strong>PURO TECH</strong>.
                    Your inquiry regarding <strong>${service || "our services"}</strong>
                    has been successfully received.
                  </p>
                  <p>Our team will get back to you shortly with clear next steps.</p>
                </div>

                <div style="display:flex; gap:12px; align-items:flex-end; margin-left:12px;">
                  <img
                    src="https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/boy-mascot.png"
                    height="110"
                    alt="Mascot"
                    style="display:block;"
                  />
                  <img
                    src="https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/girl-mascot.png"
                    height="110"
                    alt="Mascot"
                    style="display:block;"
                  />
                </div>
              </div>

              <hr style="margin:22px 0; border:none; border-top:1px solid #2a0a0c;" />

              <div style="text-align:center; padding:22px; background:#000; border-radius:14px; border:1px solid #2a0a0c;">
                <p style="margin:0 0 12px; font-size:14px; color:#cfcfcf;">
                  Need a quicker response?
                </p>
                <a
                  href="https://wa.me/918889287261?text=${encodeURIComponent(
                    `${whatsappMessage}\nHi PURO TECH, I just submitted a query on your website.`
                  )}"
                  target="_blank"
                  style="display:inline-block; padding:12px 28px; background:#25D366; color:#000; text-decoration:none; border-radius:999px; font-weight:600; font-size:14px;"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <p style="margin:18px 0 0 0;">
                Regards,<br />
                <strong>PURO TECH Team</strong><br />
                <span style="font-size:13px; color:#9a9a9a;">
                  Secure | Scalable | Modern Digital Solutions
                </span>
              </p>
            </div>

            <div style="padding:14px; text-align:center; font-size:12px; color:#777; background:#000; border-top:1px solid #2a0a0c;">
              This is an automated confirmation email. Please do not reply.
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
