# EmailJS Setup Guide for MFM Contact Form

This guide will help you set up EmailJS to handle contact form submissions for the MFM Australia website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended for mfmcanberra@gmail.com)
4. Connect your Gmail account (mfmcanberra@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```html
Subject: New Contact Form Submission - {{subject}}

Hello MFM Australia Team,

You have received a new contact form submission:

**From:** {{from_name}}
**Email:** {{from_email}}
**Phone:** {{from_phone}}
**Subject:** {{subject}}

**Message:**
{{message}}

---
This message was sent from the MFM Australia website contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update the Contact Form

Replace the placeholder values in `app/contact/page.tsx`:

```typescript
// Line 25: Replace YOUR_PUBLIC_KEY
window.emailjs.init('user_def456') // Your actual public key

// Line 60: Replace YOUR_SERVICE_ID
'YOUR_SERVICE_ID' // Your actual service ID (e.g., 'service_abc123')

// Line 61: Replace YOUR_TEMPLATE_ID  
'YOUR_TEMPLATE_ID' // Your actual template ID (e.g., 'template_xyz789')
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email (mfmcanberra@gmail.com) for the test message

## Configuration Summary

Replace these values in `app/contact/page.tsx`:

```typescript
// Replace these placeholders with your actual EmailJS credentials:
'YOUR_PUBLIC_KEY'    → 'user_def456' (your public key)
'YOUR_SERVICE_ID'    → 'service_abc123' (your service ID)
'YOUR_TEMPLATE_ID'   → 'template_xyz789' (your template ID)
```

## Features Added

✅ **Form State Management** - Tracks form data and submission status
✅ **Loading States** - Shows "Sending Message..." while processing
✅ **Success/Error Messages** - User feedback after submission
✅ **Form Reset** - Clears form after successful submission
✅ **Email to mfmcanberra@gmail.com** - All submissions go to Canberra location
✅ **Professional Email Template** - Formatted emails with all form data

## Troubleshooting

### Form not sending emails?
- Check that all EmailJS credentials are correctly set
- Verify your Gmail account is properly connected
- Check browser console for JavaScript errors

### Emails not received?
- Check spam/junk folder
- Verify the Gmail account has proper permissions
- Test with a different email service if needed

### TypeScript errors?
- Make sure `app/types/emailjs.d.ts` is created
- Restart your development server

## Security Notes

- EmailJS public keys are safe to expose in frontend code
- Consider rate limiting for production use
- Monitor EmailJS usage to stay within free tier limits (200 emails/month) 