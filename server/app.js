const express = require("express");
const cors = require("cors");
const app = express();

const connectToDB = require("./config/db");
const adminRoutes = require("./routes/admin.routes");
const indexRoutes = require("./routes/index.routes");
const countryRoutes = require("./routes/country.routes");
const offerRoutes = require("./routes/offer.routes");
const vlogRoutes = require("./routes/vlog.routes");
const bookingRoutes = require("./routes/booking.routes");
const packageRoutes = require("./routes/package.routes");
const popularPlaceRoutes = require("./routes/popular-place.routes");
const partnerRoutes = require("./routes/partner.routes");
const experienceRoutes = require("./routes/experience.routes");
const upcomingTripRoutes = require("./routes/upcoming-trip.routes");
connectToDB();
app.use(cors());

// app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json("Apollo Expeditions API is running!");
});
app.use("/", indexRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/countries", countryRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/popular-places", popularPlaceRoutes);
app.use("/api/vlogs", vlogRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/upcoming-trips", upcomingTripRoutes);


app.listen(process.env.PORT || 3000);
