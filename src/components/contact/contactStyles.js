import styled from 'styled-components';

export const ExperiencePageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FFFFFFFF;
  display: flex;
  flex-direction: column;
`;

export const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid #E0E0E0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  align-self: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  align-self: center;
  position: relative;  // Allow the overlay to position itself over this form
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  width: 100%;  // Take up the full width of the FormContainer
  height: 100%; // Take up the full height of the FormContainer
  background-color: rgba(0, 0, 0, 0.3);  // Semi-transparent gray background
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;  // Ensure it's above the form content
  border-radius: 15px;  // To match the FieldSet border-radius
  padding-left: 40px;
  padding-right: 40px;
  margin-left: -40px;
`;


export const Title = styled.h2`
  font-family: 'diodrum';
  font-weight: 600;
  font-size: 24pt;
  text-align: center;
  margin-bottom: 30px;
  color: #2B2B2BFF;
`;

export const InputField = styled.input`
  font-family: 'lato';
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  font-size: 14pt;
  color: #2B2B2BFF;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFC9C9FF;
  }
`;

export const TextArea = styled.textarea`
  font-family: 'lato';
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  font-size: 14pt;
  color: #2B2B2BFF;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFC9C9FF;
  }
`;

export const SubmitButton = styled.button`
  font-family: 'poppins';
  font-weight: 600;
  font-size: 16pt;
  color: #FFFFFF;
  background-color: ${(props) => (props.disabled ? '#A9A9A9' : '#2B2B2BFF')};  // Change background color if disabled
  padding: 12px 20px;
  border: none;
  border-radius: 30px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};  // Change cursor if disabled
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#A9A9A9' : '#747474FF')};  // No hover effect if disabled
    transform: ${(props) => (props.disabled ? 'none' : 'scale(1.02)')};  // No transform effect if disabled
  }
`;

export const StatusMessage = styled.p`
  margin-top: 20px;
  font-family: 'lato';
  text-align: center;
  color: ${props => (props.error ? '#FF4D4DFF' : '#2ECC71FF')};
  font-size: 14pt;
`;


