// src/api/subscriber/controllers/subscriber.ts

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::subscriber.subscriber",
  ({ strapi }) => ({
    async create(ctx) {
      try {
        const { email } = ctx.request.body.data || {};

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
          return ctx.badRequest("Invalid or missing email address.");
        }

        //  Check for duplicate emails
        const existing = await strapi.entityService.findMany(
          "api::subscriber.subscriber",
          {
            filters: { email },
          }
        );

        if (existing.length > 0) {
          return ctx.conflict("Email already subscribed.");
        }

        //  Get IP address
        const ip =
          ctx.request.headers["x-forwarded-for"]
            ?.toString()
            .split(",")[0]
            .trim() ||
          ctx.ip ||
          ctx.request.socket?.remoteAddress ||
          "unknown";

        //  Create subscriber with IP stored
        const subscriber = await strapi.entityService.create(
          "api::subscriber.subscriber",
          {
            data: {
              email,
              ip: typeof ip === "string" ? ip : ip?.[0] || "unknown",
            },
          }
        );

        // Send confirmation email to user
        await strapi.plugins["email"].services.email.send({
          to: email,
          subject: "Welcome to Raphaella Lewis Foundation – You’re Subscribed!",
          html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; background: #f9f9f9; padding: 20px; border-radius: 8px;">
          <h2 style="color: #024a71;">Welcome to Raphaella Lewis Foundation!</h2>
          <p>Hi there,</p>
          <p>Thank you for subscribing to our updates. We’re excited to have you onboard.</p>
          <p>Expect to receive updates about our programs, events, and latest news straight to your inbox.</p>
          <p style="margin-top: 20px;">Warm regards,<br/>Raphaella Lewis Foundation Team</p>
          <hr style="margin: 20px 0;">
          <p style="font-size: 12px; color: gray;">You are receiving this email because you subscribed on our website. If this wasn’t you, please ignore this message.</p>
        </div>
      `,
        });

        // send notification to admin
        try {
          await strapi.plugins["email"].services.email.send({
            to: [process.env.ADMIN_EMAIL || "info@raphaellalewisfoundation.org", "astainyharris1@gmail.com"],
            subject: "📬 New Subscriber Notification",
            text: `You have a new subscriber.\n\nEmail: ${email}\nIP Address: ${ip}\n\nThis message was sent automatically.`,
            html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 8px; background-color: #f9f9f9;">
      <h2 style="color: #333;">📬 New Subscriber Alert</h2>
      <p>You just got a new newsletter subscriber. Here are the details:</p>
      <table style="width: 100%; margin-top: 10px;">
        <tr>
          <td style="font-weight: bold; width: 120px;">Email:</td>
          <td>${email}</td>
        </tr>
        <tr>
          <td style="font-weight: bold;">IP Address:</td>
          <td>${ip}</td>
        </tr>
      </table>
      <hr style="margin: 20px 0;" />
      <p style="font-size: 12px; color: #888;">This message was sent automatically from your website’s subscription form.</p>
    </div>
  `,
          });
          console.log(process.env.ADMIN_EMAIL);
          console.log("Admin notification email sent.");
        } catch (err) {
          console.error("Failed to send admin notification email:", err);
        }

        return ctx.send({ message: "Subscription successful." });
      } catch (error) {
        if (
          error.name === "ValidationError" ||
          error.details?.errors[0]?.message.includes("unique")
        ) {
          // Handle uniqueness validation error explicitly
          return ctx.conflict("Email already subscribed.");
        }

        console.error("Subscription Error:", error);
        return ctx.internalServerError("An error occurred while subscribing.");
      }
    },
  })
);
