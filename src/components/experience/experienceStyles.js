import styled from 'styled-components';
import '../../assets/fonts/fonts.css';

export const ExperiencePageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFFFF;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CompanyText = styled.h1`
  color: #2B2B2BFF;
  font-family: 'captura';
  font-style: normal;
  font-weight: 400;
  font-size: 20pt;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0%;
  margin-bottom: 0%;
  white-space: nowrap; 
`

export const PositionText = styled.h2`
  color: #747474FF;
  font-family: 'captura';
  font-style: normal;
  font-weight: 400;
  font-size: 18pt;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0%;
  margin-bottom: 0%;
  white-space: nowrap; 
`

export const DateText = styled.h3`
  color: #FFC9C9FF;
  font-family: 'captura';
  font-style: normal;
  font-weight: 400;
  font-size: 16pt;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0%;
  margin-bottom: 0%;
  white-space: nowrap; 
`

export const ContentText = styled.p`
  color: #2B2B2BFF;
  font-family: 'carniola';
  font-style: normal;
  font-weight: 400;
  font-size: 16pt;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0%;
  margin-bottom: 0%;
`

export const CompanyImage = styled.img`
  width: 100px;
  height: auto;
  filter: drop-shadow(2px 2px 4px #000000AA);
`;
