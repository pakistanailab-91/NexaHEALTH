import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import prisma from "./prisma"
import { Resend } from "resend"
import { getVerificationEmailHtml, getResetPasswordEmailHtml } from "./emails/templates"
import { customSession } from "better-auth/plugins"

const resend = new Resend(process.env.RESEND_API_KEY)

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "USER",
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url, token }, request) => {
      // Print link to server console for testing/fallback
      console.log(`\n==============================================`);
      console.log(`PASSWORD RESET LINK FOR ${user.email}:`);
      console.log(url);
      console.log(`==============================================\n`);
      try {
        await resend.emails.send({
          from: process.env.EMAIL_FROM || "Transport-Hub <info@twtnews.club>",
          to: user.email,
          subject: "Reset your password",
          html: getResetPasswordEmailHtml(user.name, url),
        });
        console.log(`Password reset email sent to ${user.email}`);
      } catch (error) {
        console.error("Failed to send password reset email:", error);
      }
    }
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      // Print link to server console for testing/fallback
      console.log(`\n==============================================`);
      console.log(`EMAIL VERIFICATION LINK FOR ${user.email}:`);
      console.log(url);
      console.log(`==============================================\n`);
      try {
        await resend.emails.send({
          from: process.env.EMAIL_FROM || "Transport-Hub <info@twtnews.club>",
          to: user.email,
          subject: "Verify your email address",
          html: getVerificationEmailHtml(user.name, url),
        });
        console.log(`Verification email sent successfully to ${user.email}`);
      } catch (error) {
        console.error("Failed to send verification email:", error);
      }
    }
  },
  plugins: [
    customSession(async ({ user, session }) => {
      return {
        user: {
          ...user,
          role: (user as any).role,
          nhsTrust: (user as any).nhsTrust
        },
        session
      }
    })
  ]
})
