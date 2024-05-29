import styled from 'styled-components';

export const ContactPageContainer = styled.div`
  width: 100%;
  background-color: #FFFFFFFF;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #2B2B2BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ContactMessage = styled.div`
  margin-top: 20px;
`;


