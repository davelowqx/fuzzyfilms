import React from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

const url = "https://fuzzyfilms.co";

const InputField = styled.div`
  margin-bottom: 1rem;
  position: relative;
`;

const Input = styled.input`
  ${({ error }) =>
    error &&
    ` border-color: #ff4136;
      `}
`;

const ContactForm = () => {
  const recaptchaRef = React.useRef();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
        recaptcha: "",
        success: true,
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        message: Yup.string().required("Message is required"),
        recaptcha: Yup.string().required("Robots are not welcome!"),
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
          </InputField>
          <InputField>
            <Input
              as={Field}
              component="textarea"
              aria-label="message"
              id="message"
              type="text"
              name="message"
              placeholder="Message*"
              error={touched.message && errors.message}
            />
          </InputField>
          {values.name && values.email && values.message && (
            <InputField>
              <Field
                component={ReCAPTCHA}
                ref={recaptchaRef}
                sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                name="recaptcha"
                onChange={(value) => setFieldValue("recaptcha", value)}
              />
            </InputField>
          )}
          <button type="submit" disabled={isSubmitting}>
            {values.success ? "Message Sent!" : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
