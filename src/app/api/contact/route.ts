import { error } from 'console';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// This is the API route that handles the contact form submission
export async function POST(request: Request) {
  try {
    // Parse the request body
    const { name, email, phone, companyName, inquiry, signUpForUpdates } = await request.json();

    // Input validation
    if (!name || !email || !inquiry) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail app password
      },
    });

    // Email content
    const mailOptions = {
      from: `"MarcViews Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'kunalbansal.dev@gmail.com',
      replyTo: email,
      subject: `New Contact: ${name} from ${companyName || 'MarcViews Website'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></p>` : ''}
            ${companyName ? `<p><strong>Company:</strong> ${companyName}</p>` : ''}
            <p><strong>Sign up for updates:</strong> ${signUpForUpdates ? 'Yes' : 'No'}</p>
          </div>
          
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #1e40af;">Message:</h3>
            <p style="white-space: pre-line; line-height: 1.6;">${inquiry}</p>
          </div>
          
          <div style="font-size: 12px; color: #64748b; text-align: center; margin-top: 30px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
            <p>This email was sent from the MarcViews contact form.</p>
            <p>© ${new Date().getFullYear()} MarcViews. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}

