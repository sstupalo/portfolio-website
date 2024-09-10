// import styled from 'styled-components';

// export const ExperiencePageContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: #FFFFFFFF;
//   display: flex;
//   flex-direction: column;
//   `;

// export const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-self: center;
//   margin: 10px;
//   padding: 20px;
//   background-color: #f9f9f9;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// export const Title = styled.h2`
//   text-align: center;
//   margin-bottom: 20px;
//   color: #333;
// `;

// export const InputField = styled.input`
//   padding: 10px;
//   margin-bottom: 15px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
// `;

// export const TextArea = styled.textarea`
//   padding: 10px;
//   margin-bottom: 15px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
//   resize: none;
//   min-height: 100px;
// `;

// export const SubmitButton = styled.button`
//   padding: 10px;
//   background-color: #4caf50;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;

//   &:hover {
//     background-color: #45a049;
//   }
// `;

// export const StatusMessage = styled.p`
//   margin-top: 20px;
//   text-align: center;
//   color: ${props => (props.error ? 'red' : 'green')};
// `;

import styled from 'styled-components';

export const ExperiencePageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FFFFFFFF;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center;
  padding: 5% 10%; */
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  background-color: #FFFFFF;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid #E0E0E0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  align-self: center;

  /* &:hover {
    transform: scale(1.01);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  } */
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
  font-family: 'captura';
  font-weight: 600;
  font-size: 16pt;
  color: #FFFFFF;
  background-color: #2B2B2BFF;
  padding: 12px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #747474FF;
    transform: scale(1.02);
  }
`;

export const StatusMessage = styled.p`
  margin-top: 20px;
  font-family: 'lato';
  text-align: center;
  color: ${props => (props.error ? '#FF4D4DFF' : '#2ECC71FF')};
  font-size: 14pt;
`;
