const { sendEmail } = require("../config/resend-setup");
const tripEnquiryModel = require("../models/trip-enquiry.model");
const packageEnquiryModel = require("../models/package-enquiry.model");

module.exports.addTripEnquiry = async (req, res) => {
  try {
    const tripEnquiry = await tripEnquiryModel.create(req.body);
    if (tripEnquiry) {
      const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
            <h2 style="color: #333; text-align: center;">New Trip Enquiry</h2>
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
        `New Trip Enquiry from ${tripEnquiry.name}`,
        emailHtml
      );
      if (error) {
        res.status(500).json({ message: error.message });
      }
    }
    res.status(200).json({ message: "Enquiry sent successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.addPackageEnquiry = async (req, res) => {
  try {
    const packageEnquiry = await packageEnquiryModel.create(req.body);
    if (packageEnquiry) {
      const emailForAdmin = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
            <h2 style="color: #333; text-align: center;">New Package Enquiry</h2>
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${packageEnquiry.name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${packageEnquiry.email}</p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> ${packageEnquiry.phone}</p>
              <p style="margin: 10px 0;"><strong>Package Title:</strong> ${packageEnquiry.packageTitle}</p>
              <p style="margin: 10px 0;"><strong>Message:</strong> ${packageEnquiry.message}</p>
            </div>
            <div style="text-align: center; color: #666; font-size: 12px; margin-top: 20px;">
              <p>This is an automated email from your travel enquiry system</p>
            </div>
          </div>
        `;
      const emailForClient = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
            <h2 style="color: #333; text-align: center;">Successfully Enquired for ${packageEnquiry.packageTitle}</h2>
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${packageEnquiry.name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${packageEnquiry.email}</p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> ${packageEnquiry.phone}</p>
              <p style="margin: 10px 0;"><strong>Package Title:</strong> ${packageEnquiry.packageTitle}</p>
              <p style="margin: 10px 0;"><strong>Message:</strong> ${packageEnquiry.message}</p>
            </div>
            <div style="text-align: center; color: #666; font-size: 12px; margin-top: 20px;">
              <p>Thank you for your enquiry. We will get back to you soon.</p>
            </div>
          </div>
        `;

      const adminResponse = await sendEmail(
        `New Package Enquiry from ${packageEnquiry.name}`,
        emailForAdmin
      );
      const clientResponse = await sendEmail(
        `Successfully Enquired for ${packageEnquiry.packageTitle}`,
        emailForClient,
        packageEnquiry.email
      );

      if (adminResponse.error || clientResponse.error) {
        res.status(500).json({
          message: adminResponse.error || clientResponse.error,
        });
      }
    }
    res.status(200).json({ message: "Enquiry sent successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
