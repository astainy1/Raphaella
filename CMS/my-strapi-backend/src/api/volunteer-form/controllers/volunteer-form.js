// 'use strict';

// /**
//  * volunteer controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::volunteer.volunteer', ({ strapi }) => ({
//   async create(ctx) {
//     const { name, email, message } = ctx.request.body;

//     // 1. Save volunteer entry
//     const response = await strapi.entityService.create('api::volunteer.volunteer', {
//       data: { name, email, message },
//     });

//     // 2. Notify admin
//     await strapi.plugins['email'].services.email.send({
//       to: process.env.ADMIN_EMAIL || 'astainyharris1@gmail.com',
//       subject: 'New Volunteer Submission',
//       html: `
//         <h2>New Volunteer Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     });

//     // 3. Confirmation to user
//     await strapi.plugins['email'].services.email.send({
//       to: email,
//       subject: ' Thank you for volunteering!',
//       html: `
//         <h3>Hi ${name},</h3>
//         <p>Thanks for reaching out to volunteer! We’ve received your message and will contact you soon.</p>
//         <br/>
//         <p>- Team</p>
//       `,
//     });

//     return response;
//   },
// }));
