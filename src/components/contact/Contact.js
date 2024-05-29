import React, { useState } from 'react';
import { PageHeader, SubHeading } from '../global/Global';
import {
    ContactPageContainer,
    ContactContainer,
    ContactForm,
    Input,
    TextArea,
    Button,
    ContactMessage
} from './contactStyles';


function Contact({data}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can implement the logic to send the email
      setSent(true);
    };

    return (
      <ContactPageContainer>
        <PageHeader title='Contact Me'/>
        <ContactContainer>
            <h2>Contact Me</h2>
            <ContactForm onSubmit={handleSubmit}>
                <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
                <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <TextArea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                required
                />
                <Button type="submit">Send</Button>
            </ContactForm>
            {sent && <ContactMessage>Your message has been sent successfully!</ContactMessage>}
            <p>If you'd like to make an enquiry, please feel free to get in touch, and I will respond as soon as possible.</p>
            <p>If you prefer to contact me directly, send your email to: <a href="mailto:sophie@stupalo.com">sophie@stupalo.com</a></p>
        </ContactContainer>
    </ContactPageContainer> 
  )
}

export default Contact
