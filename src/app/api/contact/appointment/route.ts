import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, date, time, inquiry } = await request.json();

    // Input validation
    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { success: false, message: 'Name, email, phone, date, and time are required' },
        { status: 400 }
      );
    }

    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"MarcViews Appointment" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER || 'your-admin-email@example.com',
      replyTo: email,
      subject: `New Appointment Request: ${name} - ${date} at ${time}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #10b981; margin-bottom: 20px;">New Appointment Request</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #10b981; text-decoration: none;">${phone}</a></p>
            <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> ${time}</p>
          </div>
          
          ${inquiry ? `
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #047857;">Additional Notes:</h3>
            <p style="white-space: pre-line; line-height: 1.6;">${inquiry}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            <p>This is an automated message from MarcViews contact form.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const userMailOptions = {
      from: `"MarcViews" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Appointment Request Received',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #10b981; margin-bottom: 20px;">We've Received Your Appointment Request</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for scheduling an appointment with MarcViews. We have received your request with the following details:</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> ${time}</p>
            ${inquiry ? `<p><strong>Your Notes:</strong> ${inquiry}</p>` : ''}
          </div>
          
          <p>Our team will review your request and contact you shortly to confirm your appointment. If you need to make any changes, please reply to this email or contact us at ${process.env.CONTACT_EMAIL || 'contact@marcviews.com'}.</p>
          
          <p>Best regards,<br>The MarcViews Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(userMailOptions);

    return NextResponse.json({
      success: true,
      message: 'Appointment request submitted successfully',
    });
  } catch (error) {
    console.error('Error processing appointment request:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit appointment request' },
      { status: 500 }
    );
  }
}
