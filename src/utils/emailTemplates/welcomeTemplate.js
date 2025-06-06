// src/utils/emailTemplates/welcomeTemplate.js

const welcomeTemplate = ({ name, message }) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
    <h2 style="color: #333;">Hello ${name},</h2>

    <p>${message}</p>

    <p>Thank you,<br>The Team</p>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />
    <small style="color: #888;">
      If you didn’t request this email, you can safely ignore it.<br>
      This is an automated message. Please do not reply.
    </small>
  </div>
`;

export default welcomeTemplate;
