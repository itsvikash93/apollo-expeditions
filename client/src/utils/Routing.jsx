import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";

import Dashboard from "../components/admin/Dashboard";
import AddOffer from "../components/admin/AddOffer";
import AddPackage from "../components/admin/AddPackage";
import Enquiries from "../components/admin/Enquiries";
import EnquiryDetails from "../components/admin/EnquiryDetails";

import AddCountry from "../components/admin/AddCountry";
import AddPopularPlace from "../components/admin/AddPopularPlace";
import AddVlog from "../components/admin/AddVlog";
import Vlogs from "../components/vlogs/Vlogs";
import Contact from "../components/contact/Contact";
import CountryPage from "../components/encyclopedia/CountryPage";
import Offers from "../components/offers/Offers";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offers/:offerSlug" element={<Offers />} />
      <Route path="/encyclopedia/:countrySlug" element={<CountryPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/vlogs" element={<Vlogs />} />
      {/* Admin routes */}
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/offers/add" element={<AddOffer />} />
      <Route path="/admin/packages/add" element={<AddPackage />} />
      <Route path="/admin/countries/add" element={<AddCountry />} />
      <Route path="/admin/popular-places/add" element={<AddPopularPlace />} />
      <Route path="/admin/vlogs/add" element={<AddVlog />} />
      <Route path="/admin/enquiries" element={<Enquiries />} />
      <Route path="/admin/enquiries/:id" element={<EnquiryDetails />} />

    </Routes>
  );
};

export default Routing;
