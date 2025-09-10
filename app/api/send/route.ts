// app/api/send/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // send email via Resend
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // replace with your domain once verified
      to: "huyl.business@gmail.com", // your email
      subject: `New message from ${name}`,
      text: `
      From: ${name} (${email})
      --------------------------------
      ${message}

      --------------------------------
      This email was sent from my portfolio website contact form.
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
