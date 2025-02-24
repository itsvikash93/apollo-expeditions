const stateModel = require("../models/state.model");
// const placeModel = require("../models/place.model");
const enquiryModel = require("../models/enquiry.model");
const { sendEmail } = require("../config/resend-setup");
const { getObjectURL } = require("../config/aws-setup");

module.exports.getStates = async (req, res) => {
  const states = await stateModel.find().populate("places");
  res.send(states);
};

module.exports.getPlaces = async (req, res) => {
  try {
    const places = await placeModel.find().populate("state");

    res.status(200).send(places);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports.getEnquiryFormData = async (req, res) => {
  const states = await stateModel.find();
  const places = await placeModel.find();
  res.send(states, places);
};

module.exports.sendEnquiry = async (req, res) => {
  try {
    const enquiry = await enquiryModel.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      state: req.body.state,
      place: req.body.place,
      message: req.body.message,
      visitDate: req.body.visitDate,
    });

    if (enquiry) {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #333; text-align: center;">New Travel Enquiry</h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${enquiry.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${enquiry.email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${enquiry.phone}</p>
            <p style="margin: 10px 0;"><strong>State:</strong> ${enquiry.state}</p>
            <p style="margin: 10px 0;"><strong>Place:</strong> ${enquiry.place}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong> ${enquiry.message}</p>
            <p style="margin: 10px 0;"><strong>Enquiry Date:</strong> ${new Date(enquiry.date).toLocaleString()}</p>
            <p style="margin: 10px 0;"><strong>Visit Date:</strong> ${enquiry.visitDate}</p>
          </div>
          <div style="text-align: center; color: #666; font-size: 12px; margin-top: 20px;">
            <p>This is an automated email from your travel enquiry system</p>
          </div>
        </div>
      `;

      const { data, error } = await sendEmail(
        `New Travel Enquiry from ${enquiry.name}`,
        emailHtml
      );
      console.log(data, error);
    }
    // res.json(enquiry);
    res.status(200).send("Enquiry sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
