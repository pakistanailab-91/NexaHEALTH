export const getVerificationEmailHtml = (name: string, url: string) => `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
  <h2 style="color: #111827; margin-bottom: 16px;">Welcome, ${name}!</h2>
  <p style="color: #4b5563; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
    Thank you for registering. Please confirm your email address by clicking the button below.
  </p>
  <a href="${url}" style="display: inline-block; background-color: #0f766e; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 16px;">
    Verify Email Address
  </a>
  <p style="color: #6b7280; font-size: 14px; margin-top: 32px; border-top: 1px solid #e5e7eb; padding-top: 16px;">
    If you did not create an account, you can safely ignore this email.
  </p>
</div>
`

export const getResetPasswordEmailHtml = (name: string, url: string) => `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
  <h2 style="color: #111827; margin-bottom: 16px;">Password Reset Request</h2>
  <p style="color: #4b5563; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
    Hi ${name}, you requested a password reset. Click the button below to reset your password.
  </p>
  <a href="${url}" style="display: inline-block; background-color: #0f766e; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 16px;">
    Reset Password
  </a>
  <p style="color: #6b7280; font-size: 14px; margin-top: 32px; border-top: 1px solid #e5e7eb; padding-top: 16px;">
    If you didn't request a password reset, you can safely ignore this email.
  </p>
</div>
`
