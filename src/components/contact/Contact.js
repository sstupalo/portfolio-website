import React, { useState } from 'react';
import { PageHeader } from '../global/Global';
import {
  FormContainer,
  InputField,
  TextArea,
  SubmitButton,
  StatusMessage,
  ExperiencePageContainer,
  FieldSet,
  LoadingOverlay
} from './contactStyles.js';
import emailjs from 'emailjs-com';
import BarLoader from "react-spinners/BarLoader";

const Contact = () => {
  const [fromName, setFromName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  // const sendTest = (e) => {
  //   e.preventDefault();
  //   console.log("send")

  //   setSending(true);
  //   // setFromName('');
  //   // setEmail('');
  //   // setMessage('');
  //   setTimeout(() => {
  //     console.log("email sent");
  //     setStatus('Message sent successfully!');
  //     setSending(false);
  //   }, "5000");

  // }

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);

    const serviceID = 'service_ugevjx9';
    const templateID = 'template_zm1ja0j';
    const userID = 'VQzmYQOTuO2Byw1zW';

    const templateParams = {
      from_name: fromName, // The user's name
      reply_to: email,     // The user's email (used for reply-to)
      message: message,    // The user's message
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        setSending(false);
        setStatus('Message sent successfully!');
        setFromName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        setStatus('Failed to send the message, please try again.');
        setSending(false);
        console.error('EmailJS error:', error);
      });
  };

  return (
    <ExperiencePageContainer>
      <PageHeader title="Contact Me"/>
      <FormContainer onSubmit={sendEmail}>
        <FieldSet disabled={sending}>
          {/* Input field for the user's name */}
          <InputField
            type="text"
            placeholder="Your Name"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            required
          />

          {/* Input field for the user's email */}
          <InputField
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Text area for the user's message */}
          <TextArea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <SubmitButton disabled={sending} type="submit">Send</SubmitButton>
          {status && <StatusMessage>{status}</StatusMessage>}
        </FieldSet>

        {/* Overlay with loader while sending */}
        {sending && (
          <LoadingOverlay>
            <BarLoader color="#ffffff" width={150} />
          </LoadingOverlay>
        )}
      </FormContainer>
    </ExperiencePageContainer>
  );
};

export default Contact;
