import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email to admin
    const { data, error } = await resend.emails.send({
      from: 'English Proficiency Test <onboarding@resend.dev>',
      to: ['idrisaloma120@gmail.com'],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .logo {
                font-size: 24px;
                font-weight: 900;
                margin-bottom: 10px;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .info-box {
                background: white;
                padding: 15px;
                border-radius: 8px;
                margin: 15px 0;
                border-left: 3px solid #2563eb;
              }
              .label {
                color: #666;
                font-size: 12px;
                text-transform: uppercase;
                font-weight: 600;
                margin-bottom: 5px;
              }
              .value {
                font-size: 16px;
                color: #333;
                font-weight: 500;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="logo">📧 New Contact Message</div>
              <p style="margin: 0; color: #dbeafe;">English Proficiency Test Platform</p>
            </div>
            
            <div class="content">
              <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
                You have received a new message from the contact form.
              </p>
              
              <div class="info-box">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>

              <div class="info-box">
                <div class="label">Email</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="message-box">
                <div class="label">Message</div>
                <div style="margin-top: 10px; line-height: 1.8; color: #374151;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>

              <p style="color: #9ca3af; font-size: 14px; text-align: center; margin-top: 30px;">
                Sent from English Proficiency Test Contact Form<br>
                ${new Date().toLocaleString()}
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!',
        emailId: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
