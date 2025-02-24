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
connectToDB();
app.use(cors());

// app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/countries", countryRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/vlogs", vlogRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(process.env.PORT || 3000);
