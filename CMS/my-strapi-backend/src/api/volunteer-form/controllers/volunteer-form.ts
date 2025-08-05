/**
 * volunteer-form controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::volunteer-form.volunteer-form",
  ({ strapi }) => ({
    async create(ctx) {
      const { name, email, phone, reason, message } = ctx.request.body.data;
      console.log(name, email);

      // Check if any entry already exists with the provided fields
      const existingEntries = await strapi.entityService.findMany(
        "api::volunteer-form.volunteer-form",
        {
          filters: {
            $or: [{ email }, { name }, { phone }],
          },
        }
      );

      // Prioritize email first
      let conflictMessage = null;

      for (const entry of existingEntries) {
        if (entry.email === email) {
          conflictMessage =
            "This email has already been used to submit the volunteer form.";
          break;
        }
        if (entry.name === name) {
          conflictMessage =
            "A submission has already been made with this name.";
        } else if (entry.phone === phone) {
          conflictMessage =
            "This phone number has already been used.";
        }
      }

      // Return conflict if there's any matching data
      if (conflictMessage) {
        return ctx.conflict(conflictMessage);
      }

      // 1. Save to CMS
      const entry = await strapi.entityService.create(
        "api::volunteer-form.volunteer-form",
        {
          data: {
            name,
            email,
            phone,
            reason,
            message,
          },
        }
      );

      // 2. Send email to admin
      await strapi.plugins["email"].services.email.send({
        to: [process.env.ADMIN_EMAIL || "info@raphaellalewisfoundation.org", "astainyharris1@gmail.com"],
        subject: "📝 New Volunteer Form Submission",
        html: `
    <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); padding: 30px;">
        <h2 style="color: #333333; margin-bottom: 20px;">New Volunteer Submission</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 16px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 8px 0;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
            <td style="padding: 8px 0;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Reason:</td>
            <td style="padding: 8px 0;">${reason}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Message:</td>
            <td style="padding: 8px 0;">${message}</td>
          </tr>
        </table>
        <p style="margin-top: 30px; font-size: 14px; color: #999;">This message was automatically sent from your website's volunteer form.</p>
      </div>
    </div>
  `,
      });

      // 3. Confirmation email to user
      await strapi.plugins["email"].services.email.send({
        to: email,
        subject: "✅ We've received your volunteer request",
        html: `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); padding: 30px; border-top: 6px solid #0ea5e9;">

        
        <div style="text-align: center; margin-bottom: 25px;">
          <img src="https://raphaellalewisfoundation.org/wp-content/uploads/2025/02/Logo-102x85.png" alt="Organization Logo" style="height: 60px;" />
        </div>

        <!-- Greeting -->
        <h2 style="color: #0ea5e9; margin-top: 0;">Thank You for Reaching Out, ${name}!</h2>

        <!-- Message -->
        <p style="font-size: 16px; color: #444;">
          We’ve received your request to volunteer and truly appreciate your interest in being part of our mission.
        </p>
        <p style="font-size: 16px; color: #444;">
          Our team will review your submission and get in touch with you as soon as possible.
        </p>

        <p style="font-size: 16px; color: #444;">
          Meanwhile, you can review our <a href="https://drive.google.com/file/d/1YInIwQMKxBknUoVV5-vy35ECozlnrbX5/view?usp=sharing" style="color: #0ea5e9; text-decoration: none;">Volunteer Handbook</a> to get started.
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

        <!-- Social Links -->
        <div style="text-align: center; margin-bottom: 20px;">
          <a href="https://www.facebook.com/share/1F7uYhVoHN/?mibextid=wwXIfr" target="_blank" style="margin: 0 10px;">
            <img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" style="height: 24px; width: 24px;" />
          </a>
          <a href="https://whatsapp.com/channel/0029VbBDbP82kNFlGTRLl81X" target="_blank" style="margin: 0 10px;">
            <img src="https://cdn-icons-png.flaticon.com/24/733/733585.png" alt="WhatsApp" style="height: 24px; width: 24px;" />
          </a>
          <a href="https://www.instagram.com/raphaellalewisfoundation?igsh=MWc4MjV6OTZxMDF2eg%3D%3D&utm_source=qr" target="_blank" style="margin: 0 10px;">
            <img src="https://cdn-icons-png.flaticon.com/24/2111/2111463.png" alt="Instagram" style="height: 24px; width: 24px;" />
          </a>
          <a href="https://www.tiktok.com/@raphaellalewisfoundation" target="_blank" style="margin: 0 10px;">
            <img src="https://cdn-icons-png.flaticon.com/24/3046/3046122.png" alt="TikTok" style="height: 24px; width: 24px;" />
          </a>
        </div>

        <!-- Footer -->
        <p style="font-size: 16px; color: #333; margin-top: 30px;">
          Warm regards,<br/>
          <strong>The Team</strong><br/>
          <a href="https://raphaellalewisfoundation.org/" style="color: #0ea5e9; text-decoration: none;">Raphaella Lewis Foundation</a>
        </p>
      </div>
    </div>
  `,
      });

      return { data: entry };
    },
  })
);
