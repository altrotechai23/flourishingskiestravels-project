// app/api/contact/route.ts

import { NextResponse } from "next/server"
import { resend } from "@/lib/resend"
import { ContactEmail } from "@/emails/contact-email"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = body

    if (
      !name ||
      !email ||
      !phone ||
      !subject ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 },
      )
    }

    await resend.emails.send({
      from: "Flourishing Skies <info@flourishingskiestravels.com>",
      to: ["info@flourishingskiestravels.com", "flighttickets@flourishingskiestravels.com", "ceo@flourishingskiestravels.com", "visasandtours@flourishingskiestravels.com"],
      replyTo: email,
      subject: `New Inquiry • ${subject}`,
      react: ContactEmail({
        name,
        email,
        phone,
        subject,
        message,
      }),
    })

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message.",
      },
      { status: 500 },
    )
  }
}