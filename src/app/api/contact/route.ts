import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, budget, timeline } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email and phone are required." },
        { status: 400 }
      );
    }

    // Gmail SMTP transporter
    // GMAIL_USER and GMAIL_APP_PASSWORD are set as environment variables in Vercel
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to Seiki Properties inbox
    await transporter.sendMail({
      from: `"Seiki Properties Website" <${process.env.GMAIL_USER}>`,
      to: "contact@seikiproperties.com",
      replyTo: email,
      subject: `New Enquiry from ${name} — Seiki Properties`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #13151a;">
          <div style="background: #001f4b; padding: 32px 40px;">
            <h1 style="color: #B08D57; font-size: 22px; font-weight: 300; margin: 0; letter-spacing: 2px;">SEIKI PROPERTIES</h1>
            <p style="color: #ffffff; opacity: 0.7; font-size: 13px; margin: 6px 0 0;">New Website Enquiry</p>
          </div>

          <div style="background: #ffffff; padding: 36px 40px; border: 1px solid #e8e2d5;">
            <h2 style="font-size: 20px; margin: 0 0 24px; color: #001f4b;">Contact Details</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; color: #8A6D3F; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; width: 130px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; font-size: 15px; color: #001f4b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; color: #8A6D3F; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; font-size: 15px;"><a href="mailto:${email}" style="color: #001f4b;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; color: #8A6D3F; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; font-size: 15px;"><a href="tel:${phone}" style="color: #001f4b;">${phone}</a></td>
              </tr>
              ${budget ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; color: #8A6D3F; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Budget</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; font-size: 15px; color: #001f4b;">${budget}</td>
              </tr>` : ""}
              ${timeline ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; color: #8A6D3F; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Timeline</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0ece4; font-size: 15px; color: #001f4b;">${timeline}</td>
              </tr>` : ""}
              ${message ? `
              <tr>
                <td style="padding: 10px 0; color: #8A6D3F; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; vertical-align: top; padding-top: 14px;">Message</td>
                <td style="padding: 10px 0; padding-top: 14px; font-size: 15px; color: #001f4b; line-height: 1.6;">${message}</td>
              </tr>` : ""}
            </table>
          </div>

          <div style="background: #f4f1ea; padding: 20px 40px; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background: #B08D57; color: #001f4b; font-weight: 600; font-size: 13px; padding: 12px 28px; border-radius: 999px; text-decoration: none; letter-spacing: 0.5px;">Reply to ${name}</a>
          </div>

          <div style="padding: 16px 40px; text-align: center;">
            <p style="color: #aaa; font-size: 11px; margin: 0;">Sent from seikiproperties.com contact form</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to the customer
    await transporter.sendMail({
      from: `"Seiki Properties" <${process.env.GMAIL_USER}>`,
      to: email,
      replyTo: "contact@seikiproperties.com",
      subject: "We've received your enquiry — Seiki Properties",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #13151a;">
          <div style="background: #001f4b; padding: 32px 40px;">
            <h1 style="color: #B08D57; font-size: 22px; font-weight: 300; margin: 0; letter-spacing: 2px;">SEIKI PROPERTIES</h1>
            <p style="color: #ffffff; opacity: 0.7; font-size: 13px; margin: 6px 0 0;">Dubai Real Estate Advisory</p>
          </div>

          <div style="background: #ffffff; padding: 36px 40px; border: 1px solid #e8e2d5;">
            <p style="font-size: 16px; color: #001f4b; margin: 0 0 16px;">Hi ${name},</p>
            <p style="font-size: 15px; color: #555; line-height: 1.7; margin: 0 0 16px;">
              Thank you for reaching out. We've received your enquiry and a member of our team will be in touch within one business day.
            </p>
            <p style="font-size: 15px; color: #555; line-height: 1.7; margin: 0 0 24px;">
              If you need to speak to us sooner, you can reach us directly on WhatsApp or by phone:
            </p>
            <p style="font-size: 14px; color: #001f4b; margin: 0 0 8px;">🇦🇪 Dubai: <a href="tel:+971568991112" style="color: #B08D57;">+971 56 899 1112</a></p>
            <p style="font-size: 14px; color: #001f4b; margin: 0 0 24px;">🇮🇳 India: <a href="tel:+919999911112" style="color: #B08D57;">+91 99999 11112</a></p>
          </div>

          <div style="background: #f4f1ea; padding: 20px 40px; text-align: center;">
            <p style="color: #888; font-size: 12px; margin: 0;">seikiproperties.com &nbsp;·&nbsp; contact@seikiproperties.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
