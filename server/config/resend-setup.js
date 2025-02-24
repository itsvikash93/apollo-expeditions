const { Resend } = require("resend");

require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (subject, html) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [process.env.ADMIN_EMAIL],
    subject: subject,
    html: html,
  });

  return { data, error };
};

module.exports = { sendEmail };
