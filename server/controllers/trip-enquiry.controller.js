const { sendEmail } = require("../config/resend-setup");
const tripEnquiryModel = require("../models/trip-enquiry.model");

module.exports.addTripEnquiry = async (req, res) => {
  try {
    const tripEnquiry = await tripEnquiryModel.create(req.body);
    if (tripEnquiry) {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #333; text-align: center;">New Travel Enquiry</h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${tripEnquiry.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${tripEnquiry.email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${tripEnquiry.phone}</p>
            <p style="margin: 10px 0;"><strong>Trip Title:</strong> ${tripEnquiry.tripTitle}</p>
            <p style="margin: 10px 0;"><strong>Trip Location:</strong> ${tripEnquiry.tripLocation}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong> ${tripEnquiry.message}</p>
            <p style="margin: 10px 0;"><strong>Enquiry Date:</strong> ${tripEnquiry.tripDate}</p>
          </div>
          <div style="text-align: center; color: #666; font-size: 12px; margin-top: 20px;">
            <p>This is an automated email from your travel enquiry system</p>
          </div>
        </div>
      `;

      const { data, error } = await sendEmail(
        `New Travel Enquiry from ${tripEnquiry.name}`,
        emailHtml
      );
      console.log(data, error);
    }
    res.status(201).json(tripEnquiry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
