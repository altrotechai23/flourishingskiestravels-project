// app/api/request/route.ts
// Requires: npm install resend
// Set env var: RESEND_API_KEY=re_xxxxxxxxxxxx
//              ADMIN_EMAIL=admin@yourcompany.com

import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Pretty-print field names
function humanise(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim()
}

// Map service names to emoji for visual flair in emails
const serviceEmoji: Record<string, string> = {
  "Travel Consultancy": "🌍",
  "Visa Assistance": "📋",
  "Tour Bookings": "🗺️",
  "Hotel Bookings": "🏨",
  "Travel Insurance": "🛡️",
  "Flight Bookings": "✈️",
  "Flight Hire / Charter": "🛩️",
  "Airport Transfers": "🚗",
  "Airport Assistance": "🤝",
  "Vacation Packages": "🎉",
  "Yellow Fever / Passport": "💉",
  "Freight Forwarding": "🚢",
  "Logistics / Transportation": "🚛",
  "Package Pickup & Delivery": "📦",
  "Riders Services": "🏍️",
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { service, name, email, phone, ...rest } = body

    if (!service || !name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emoji = serviceEmoji[service] ?? "📩"
    const adminEmail = process.env.ADMIN_EMAIL ?? "admin@yourtravelcompany.com"

    // ── Build field rows for admin email ──────────────────────────────────────
    const extraRows = Object.entries(rest)
      .filter(([, v]) => v && String(v).trim())
      .map(
        ([k, v]) => `
        <tr>
          <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#6b7280;white-space:nowrap;background:#f9fafb;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
            ${humanise(k)}
          </td>
          <td style="padding:10px 16px;font-size:14px;color:#111827;border-bottom:1px solid #e5e7eb;">
            ${String(v)}
          </td>
        </tr>`
      )
      .join("")

    // ── Admin notification email ──────────────────────────────────────────────
    const adminHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,.1);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#003b95 0%,#0071c2 100%);padding:32px 40px;text-align:center;">
            <div style="font-size:40px;margin-bottom:12px;">${emoji}</div>
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">New Service Request</h1>
            <p style="margin:8px 0 0;color:#93c5fd;font-size:14px;">${service}</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 40px;">

            <!-- Client summary -->
            <div style="background:#eff6ff;border-radius:12px;padding:20px 24px;margin-bottom:24px;border-left:4px solid #0071c2;">
              <h2 style="margin:0 0 12px;font-size:16px;color:#1e40af;">Client Information</h2>
              <table width="100%">
                <tr>
                  <td style="font-size:13px;color:#6b7280;padding-bottom:6px;">Full Name</td>
                  <td style="font-size:14px;font-weight:600;color:#111827;padding-bottom:6px;">${name}</td>
                </tr>
                <tr>
                  <td style="font-size:13px;color:#6b7280;padding-bottom:6px;">Email</td>
                  <td style="font-size:14px;font-weight:600;color:#111827;padding-bottom:6px;">
                    <a href="mailto:${email}" style="color:#0071c2;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="font-size:13px;color:#6b7280;">Phone</td>
                  <td style="font-size:14px;font-weight:600;color:#111827;">
                    <a href="tel:${phone}" style="color:#0071c2;">${phone}</a>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Request details -->
            <h2 style="margin:0 0 12px;font-size:16px;color:#374151;">Request Details</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
              ${extraRows || `<tr><td colspan="2" style="padding:16px;color:#9ca3af;font-size:14px;">No additional details provided.</td></tr>`}
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;background:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">
              This request was submitted via the website booking form.<br>
              Please respond to the client within 24 hours.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

    // ── Client confirmation email ─────────────────────────────────────────────
    const clientHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,.1);">

        <tr>
          <td style="background:linear-gradient(135deg,#003b95 0%,#0071c2 100%);padding:40px;text-align:center;">
            <div style="font-size:48px;margin-bottom:16px;">✅</div>
            <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;">We've received your request!</h1>
            <p style="margin:12px 0 0;color:#bfdbfe;font-size:15px;">Service: <strong style="color:#fff;">${service}</strong></p>
          </td>
        </tr>

        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 16px;font-size:16px;color:#374151;">Hi <strong>${name}</strong>,</p>
            <p style="margin:0 0 24px;font-size:15px;color:#6b7280;line-height:1.7;">
              Thank you for submitting a <strong>${service}</strong> request. Our team has received your enquiry
              and will get back to you within <strong>24 hours</strong>.
            </p>

            <div style="background:#f0fdf4;border-radius:12px;padding:20px 24px;border-left:4px solid #22c55e;margin-bottom:24px;">
              <p style="margin:0;font-size:14px;color:#16a34a;font-weight:600;">What happens next?</p>
              <ul style="margin:8px 0 0;padding-left:20px;font-size:14px;color:#374151;line-height:2;">
                <li>Our team reviews your request</li>
                <li>A travel specialist is assigned to your case</li>
                <li>We'll contact you via email or phone to confirm details</li>
              </ul>
            </div>

            <p style="margin:0;font-size:14px;color:#9ca3af;">
              If you need urgent assistance, please contact us directly at
              <a href="mailto:${adminEmail}" style="color:#0071c2;">${adminEmail}</a>
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding:24px 40px;background:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">
              You are receiving this because you submitted a request on our website.<br>
              © ${new Date().getFullYear()} Your Travel Company. All rights reserved.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

    // ── Send both emails in parallel ──────────────────────────────────────────
    await Promise.all([
      resend.emails.send({
        from: "Travel Requests <onboarding@resend.dev>", // ← update to your verified Resend domain
        to: "altrotechai23@gmail.com",
        subject: `${emoji} New ${service} Request — ${name}`,
        html: adminHtml,
        replyTo: email,
      }),
      resend.emails.send({
        from: "Your Travel Company <onboarding@resend.dev>", // ← update
        to: "altrotechai23@gmail.com",
        subject: `✅ We've received your ${service} request`,
        html: clientHtml,
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Email send error:", err)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}