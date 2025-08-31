import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, companyName, inquiry, signUpForUpdates } = await request.json();

    // Input validation
    if (!name || !email || !inquiry) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
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
      from: `"MarcViews Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER || 'your-admin-email@example.com',
      replyTo: email,
      subject: `New Contact: ${name} ${companyName ? `from ${companyName}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #10b981; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #10b981; text-decoration: none;">${phone}</a></p>` : ''}
            ${companyName ? `<p><strong>Company:</strong> ${companyName}</p>` : ''}
            <p><strong>Sign up for updates:</strong> ${signUpForUpdates ? 'Yes' : 'No'}</p>
          </div>
          
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #047857;">Message:</h3>
            <p style="white-space: pre-line; line-height: 1.6;">${inquiry}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            <p>This is an automated message from MarcViews contact form.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user if they opted in
    if (signUpForUpdates) {
      const userMailOptions = {
        from: `"MarcViews" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Thank You for Contacting MarcViews',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #10b981; margin-bottom: 20px;">Thank You for Reaching Out!</h2>
            
            <p>Dear ${name},</p>
            
            <p>Thank you for contacting MarcViews. We've received your message and will get back to you as soon as possible.</p>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Your Message:</strong></p>
              <p style="white-space: pre-line; line-height: 1.6;">${inquiry}</p>
            </div>
            
            <p>You've been subscribed to our newsletter and will receive updates about our latest services and offers.</p>
            
            <p>If you have any urgent questions, feel free to contact us at ${process.env.CONTACT_EMAIL || 'contact@marcviews.com'}.</p>
            
            <p>Best regards,<br>The MarcViews Team</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
              <p>This is an automated message. To unsubscribe from our newsletter, please reply with 'Unsubscribe' in the subject line.</p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(userMailOptions);
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
