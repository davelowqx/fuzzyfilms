import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

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
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
        recaptcha: "",
        button: "SUBMIT",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        message: Yup.string().required("Message is required"),
        recaptcha: Yup.string().required("Robots are not welcome!"),
      })}
      onSubmit={(
        { name, email, message, recaptcha },
        { setSubmitting, resetForm, setFieldValue }
      ) => {
        fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: encode({
            "form-name": "contact",
            name,
            email,
            message,
            recaptcha,
          }),
        })
          .then(() => {
            setFieldValue("button", "MESSAGE SENT!");
          })
          .catch((err) => {
            setFieldValue("button", "OOPS! PLEASE TRY AGAIN");
            console.log(err);
          })
          .finally(() => {
            setSubmitting(false);
            setTimeout(() => resetForm(), 5000);
          });
      }}
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form name="contact" data-netlify={true}>
          <input type="hidden" name="form-name" value="contact" />
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
            {values.button}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
