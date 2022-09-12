import styled from 'styled-components';
import '../../assets/fonts/fonts.css';

export const ExperiencePageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFFFF;
  display: flex;
  flex-direction: column;
  `;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFC9C933;
  display: flex;
  border-radius: 25px;
`;

export const CarouselContainer = styled.div`
  display: flex;
`;

export const CarouselItemContainer = styled.div`
  display: flex;
`;

export const PositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CompanyText = styled.h1`
  color: #2B2B2BFF;
  font-family: 'captura';
  font-style: normal;
  font-weight: 400;
  font-size: 16pt;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0%;
  margin-bottom: 0%;
`

export const PositionText = styled.h2`
  color: #747474FF;
  font-family: 'captura';
  font-style: normal;
  font-weight: 400;
  font-size: 14pt;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0%;
  margin-bottom: 0%;
`

export const DateText = styled.h3`
  color: #FFC9C9FF;
  font-family: 'captura';
  font-style: normal;
  font-weight: 400;
  font-size: 12pt;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0%;
  margin-bottom: 0%;
`

export const ContentText = styled.p`
  color: #2B2B2BFF;
  font-family: 'carniola';
  font-style: normal;
  font-weight: 400;
  font-size: 14pt;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 2rem;
  white-space: pre-line;
  text-align: justify;
  margin: 2%;
`

export const CompanyImage = styled.img`
  width: 120px;
  height: auto;
  filter: drop-shadow(2px 2px 4px #000000AA);
`;
