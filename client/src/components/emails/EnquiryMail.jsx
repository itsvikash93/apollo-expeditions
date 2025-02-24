import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

const EnquiryMail = ({ enquiry }) => (
  <Html>
    <Head />
    <Body
      style={{ backgroundColor: "#f9f9f9", fontFamily: "Arial, sans-serif" }}
    >
      <Container
        style={{
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
        }}
      >
        <Heading style={{ textAlign: "center" }}>
          Enquiry from {enquiry.name}!
        </Heading>
        <Text style={{ fontSize: "16px" }}>
          We're excited to have you on board. Let’s make great things happen
          together!
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EnquiryMail;
