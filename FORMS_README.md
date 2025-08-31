# Form Submission System

This document provides an overview of the form submission system used in the MarcViews Next.js application.

## Available Forms

1. **General Contact Form**
   - Path: `/contact/general`
   - Handles general inquiries and messages
   - Sends email notifications to the admin and confirmation to the user

2. **Appointment Booking**
   - Path: `/contact/appointment`
   - Handles appointment scheduling
   - Sends email notifications to both admin and user

3. **Partnership Application**
   - Path: `/company/partners`
   - Handles partnership inquiries and applications

## Backend Integration

### Email Configuration

The system uses Nodemailer with Gmail SMTP. Set up the following environment variables in your `.env.local` file:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password  # For Gmail, use an App Password
ADMIN_EMAIL=admin@marcviews.com
CONTACT_EMAIL=contact@marcviews.com
```

### API Endpoints

- `POST /api/contact/general` - General contact form
- `POST /api/contact/appointment` - Appointment booking
- `POST /api/contact/partner` - Partnership application

### Form Service

The `formService` utility handles all form submissions with consistent error handling and response formatting.

```typescript
// Example usage
const response = await formService.submitContactForm({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  companyName: 'Example Corp',
  inquiry: 'Hello, I have a question',
  signUpForUpdates: true
});
```

## Form Components

Each form includes:
- Client-side validation
- Loading states
- Success/error feedback
- Responsive design
- Accessible form controls

## Email Templates

All forms use HTML email templates with:
- Brand-consistent styling
- Responsive design
- Clear call-to-actions
- Fallback text for email clients

## Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Test each form submission
3. Verify email delivery in your inbox

## Troubleshooting

- **Emails not sending**: Check your SMTP settings and ensure environment variables are properly set
- **Form submission fails**: Check the browser console and server logs for errors
- **Validation issues**: Ensure all required fields are filled correctly

## Security Considerations

- All forms include CSRF protection via Next.js API routes
- Sensitive data is not logged
- Email addresses are validated before sending
- Error messages are user-friendly and don't expose sensitive information
