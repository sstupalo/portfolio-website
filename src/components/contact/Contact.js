import React, { useState } from 'react';
import { PageHeader } from '../global/Global';
import {
  FormContainer,
  InputField,
  TextArea,
  SubmitButton,
  StatusMessage,
  ExperiencePageContainer
} from './contactStyles.js';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [fromName, setFromName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

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
        setStatus('Message sent successfully!');
        setFromName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        setStatus('Failed to send the message, please try again.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <ExperiencePageContainer>
      <PageHeader title="Contact Me"/>
      <FormContainer onSubmit={sendEmail}>
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

        <SubmitButton type="submit">Send</SubmitButton>

        {status && <StatusMessage>{status}</StatusMessage>}
      </FormContainer>
    </ExperiencePageContainer>
  );
};

export default Contact;
