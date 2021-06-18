import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Recaptcha from "react-google-recaptcha";
import * as Yup from "yup";
import styled from "styled-components";

const url = "https://fuzzyfilms.co";

const Error = styled.span`
  color: #ff4136;
`;

const Center = styled.div`
  text-align: left;

  h4 {
    font-weight: normal;
  }
`;

const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  ${({ error }) =>
    error &&
    ` border-color: #ff4136;
      `}
`;

const ContactForm = () => (
  <Formik
    initialValues={{
      name: "",
      email: "",
      message: "",
      recaptcha: "",
      success: false,
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
      recaptcha:
        process.env.NODE_ENV !== "development"
          ? Yup.string().required("Robots are not welcome yet!")
          : Yup.string(),
    })}
    onSubmit={async (
      { name, email, message },
      { setSubmitting, resetForm, setFieldValue }
    ) => {
      try {
        await axios({
          method: "POST",
          url:
            process.env.NODE_ENV !== "development"
              ? `${url}/api/contact`
              : "http://localhost:8000/api/contact",
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify({
            name,
            email,
            message,
          }),
        });
        setSubmitting(false);
        setFieldValue("success", true);
        setTimeout(() => resetForm(), 6000);
      } catch (err) {
        setSubmitting(false);
        setFieldValue("success", false);
        alert("Something went wrong, please try again!");
      }
    }}
  >
    {({ values, touched, errors, setFieldValue, isSubmitting }) => (
      <Form>
        <InputField>
          <Input
            as={Field}
            type="text"
            name="name"
            component="input"
            aria-label="name"
            placeholder="Name*"
            error={touched.name && errors.name}
          />
          <ErrorMessage component={Error} name="name" />
        </InputField>
        <InputField>
          <Input
            id="email"
            aria-label="email"
            component="input"
            as={Field}
            type="email"
            name="email"
            placeholder="Email*"
            error={touched.email && errors.email}
          />
          <ErrorMessage component={Error} name="email" />
        </InputField>
        <InputField>
          <Input
            as={Field}
            component="textarea"
            aria-label="message"
            id="message"
            rows="8"
            type="text"
            name="message"
            placeholder="Message*"
            error={touched.message && errors.message}
          />
          <ErrorMessage component={Error} name="message" />
        </InputField>
        {values.name &&
          values.email &&
          values.message &&
          process.env.NODE_ENV !== "development" && (
            <InputField>
              <Field
                component={Recaptcha}
                sitekey={process.env.SITE_KEY}
                name="recaptcha"
                onChange={(value) => setFieldValue("recaptcha", value)}
              />
              <ErrorMessage component={Error} name="recaptcha" />
            </InputField>
          )}
        {values.success && (
          <InputField>
            <Center>
              <h4>Your message has been sent, we will get back to you ASAP!</h4>
            </Center>
          </InputField>
        )}
        <Center>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Center>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
